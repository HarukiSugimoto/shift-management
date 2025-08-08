import { Home, Login } from "@mui/icons-material";
import { AdminRootLayout } from "@/components/common/layout/AdminRootLayout";
import { Outlet } from "react-router-dom";

const menuItems = [
    { text: "ホーム", icon: <Home />, href: "/admin/unauthenticated" },
    { text: "ログイン", icon: <Login />, href: "/admin/unauthenticated/sign-in" },
];  
export const AdminUnauthenticatedLayout = () => {
    return (
        <AdminRootLayout
            title="管理画面"
            menuItems={menuItems}
        >
            <Outlet />
        </AdminRootLayout>
    );
};
