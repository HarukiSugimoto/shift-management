import { useStaffSignInForm } from "@/hooks/common/useSignIn";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

export const SignInPage = () => {
    const { control, isShowPassword, toggleShowPassword, isSubmitting, errors, signInErrorMessage, submitForm } = useStaffSignInForm();
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
                    <form onSubmit={submitForm}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="メールアドレス"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    margin="normal"
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="パスワード"
                                    type={isShowPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.password}
                                    helperText={errors.password ? errors.password.message : ''}
                                    margin="normal"
                                />
                            )}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isSubmitting}
                        >
                            ログイン
                        </Button>
                    </form>
                </Box>
            </CardContent>
        </Card>
    );
}
