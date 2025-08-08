import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { adminTheme } from '@/theme/admin';
import { DrawerProvider } from '@/context/DrawerContext';

export const AdminRootLayout = () => {
    return (
        <ThemeProvider disableTransitionOnChange defaultMode="light" theme={adminTheme}>
            <CssBaseline />
            <DrawerProvider>
                <Outlet />
            </DrawerProvider>
        </ThemeProvider>
    );
}
