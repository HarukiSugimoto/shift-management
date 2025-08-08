import { FormContainer } from "@/components/common/form/FormContainer";
import { FormTextField } from "@/components/common/form/FormTextField";
import { useStaffSignInForm } from "@/hooks/common/useSignIn";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const SignInPage = () => {
    const { control, isSubmitting, submitForm } = useStaffSignInForm();
    return (
        <Card sx={{
            width: '50%',
            margin: 'auto'
        }}>
            <CardContent>
                <Typography>
                    管理者ログイン
                </Typography>
                <Box>
                    <FormContainer 
                        onSubmit={submitForm}
                        isSubmitting={isSubmitting}
                        submitLabel="ログイン"
                    >
                        <FormTextField
                            name="email"
                            control={control}
                            label="メールアドレス"
                        />
                        <FormTextField
                            name="password"
                            control={control}
                            label="パスワード"
                        />

                    </FormContainer>
                </Box>
            </CardContent>
        </Card>
    );
}
