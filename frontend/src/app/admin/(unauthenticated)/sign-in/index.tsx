import { Card, CardContent, Typography } from "@mui/material";

export const SignInPage = () => {
    return (
        <Card sx={{
            width: '50%',
            margin: 'auto'
        }}>
            <CardContent>
                <Typography>
                    管理者ログイン
                </Typography>
                {/* <SignInForm /> */}
            </CardContent>
        </Card>
    );
}
