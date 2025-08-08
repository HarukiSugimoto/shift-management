import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formErrorMessages } from '@/constants/formErrorMessages';
import React, { useState } from 'react';
import { authApiClient } from '@/external';
import { ensureCsrfCookie } from '@/lib/csrf';
import { useAdminLoginSessionContext } from '@/context/admin/adminLoginSessionContext';
// Zodスキーマの定義
const signInFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: formErrorMessages.required })
        .email({ message: formErrorMessages.invalidEmail }),
    password: z
        .string()
        .min(1, { message: formErrorMessages.emptyPassword })
        .min(8, { message: formErrorMessages.invalidPassword })
});

export const useStaffSignInForm = (option?: { submitSuccessCallback: () => void }) => {
  const [signInErrorMessage, setSignInErrorMessage] = useState<string | null>(null);
  const [isLoginSucceeded, setIsLoginSucceeded] = React.useState(false);
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const toggleShowPassword = React.useCallback(() => setIsShowPassword((before) => !before), []);
  const { refetchSession } = useAdminLoginSessionContext();
  const signInForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const submitForm = signInForm.handleSubmit(async (data) => {
    setSignInErrorMessage(null);
    try {
      await ensureCsrfCookie();
      const { response } = await authApiClient.POST('/login', {
        body: {
          email: data.email,
          password: data.password,
        },
      });
      console.log('Login response:', response);
      if (response.ok) {
        console.log('Login successful');
        refetchSession();

        setIsLoginSucceeded(true);
        if (option?.submitSuccessCallback) {
          option.submitSuccessCallback();
        }
      } else {
        console.log('Login failed');
        setSignInErrorMessage('ログインに失敗しました');
      }
    } catch (error) {
      console.error('Login error:', error);
      setSignInErrorMessage(error instanceof Error ? error.message : 'ログインに失敗しました');
    }
  });

  return {
    control: signInForm.control,
    isShowPassword,
    toggleShowPassword,
    isSubmitting: signInForm.formState.isSubmitting || isLoginSucceeded,
    errors: signInForm.formState.errors,
    signInErrorMessage,
    submitForm,
  };
};
