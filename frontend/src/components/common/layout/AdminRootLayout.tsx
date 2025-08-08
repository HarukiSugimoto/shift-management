import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { ColorModeToggle } from '@/components/common/layout/ColorModeToggle';
import { NotificationButton } from "./NotificationButton";
import { useDrawer } from "@/context/DrawerContext";

interface AdminRootLayoutProps {
    title: string;
    menuItems: {
        text: string;
        icon: React.ReactNode;
        href: string;
    }[];
    children?: React.ReactNode;
}

const drawerWidth = 300;
const appBarHeight = 64; // AppBarの高さ（px）

export const AdminRootLayout: React.FC<AdminRootLayoutProps> = (props) => {
    const { isOpen: drawerOpen, toggleDrawer } = useDrawer();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: appBarHeight }}>
                <Toolbar sx={{ minHeight: appBarHeight }}>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => toggleDrawer()}
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                <NotificationButton notificationsNumber={5} href="/notifications" />
                <ColorModeToggle />
                </Toolbar>
            </AppBar>

            <Drawer
                variant="persistent"
                open={drawerOpen}
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                display: drawerOpen ? 'block' : 'none',
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    top: `${appBarHeight}px`,
                    height: `calc(100% - ${appBarHeight}px)`,
                    position: 'fixed',
                },
                }}
            >
                <List>
                {props.menuItems.map(({ text, icon, href }) => (
                    <ListItemButton key={text} component="a" href={href}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
                </List>
            </Drawer>

            {/* コンテンツ領域 */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: `${appBarHeight}px`,
                    // ml: drawerOpen ? `${drawerWidth}px` : 0,
                    transition: "margin-left 0.3s",
                }}
            >
                {props.children}
            </Box>
        </Box>
    );
};
