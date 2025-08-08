import { Login } from "@mui/icons-material";
import { RootLayout } from "@/components/common/layout/RootLayout";
import { Outlet } from "react-router-dom";

const menuItems = [
    { text: "ログイン", icon: <Login />, href: "/admin/attendance" },
];  
export const AdminUnauthenticatedLayout = () => {
    return (
        <RootLayout
            title="管理画面"
            menuItems={menuItems}
        >
            <Outlet />
        </RootLayout>
    );
};
