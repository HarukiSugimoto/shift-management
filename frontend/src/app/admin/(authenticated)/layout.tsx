import { Business, Logout, People } from "@mui/icons-material";
import { RootLayout } from "@/components/common/layout/RootLayout";
import { Outlet } from "react-router-dom";

const menuItems = [
    { text: "スタッフ管理" , icon: <People />, href: "/admin/staff" },
    { text: "スタッフ関連申請履歴" , icon: <People />, href: "/admin/staff" },
    { text: "スタッフ関連申請一覧" , icon: <People />, href: "/admin/staff" },
    { text: "企業管理" , icon: <Business />, href: "/admin/company" },
    { text: "企業関連申請履歴" , icon: <Business />, href: "/admin/company" },
    { text: "企業関連申請一覧" , icon: <Business />, href: "/admin/company" },
    { text: "アナウンス管理" , icon: <People />, href: "/admin/announcements" },
    { text: "アナウンス関連申請履歴" , icon: <People />, href: "/admin/announcements" },
    { text: "アナウンス関連申請一覧" , icon: <People />, href: "/admin/announcements" },
    { text: "お問い合わせ一覧" , icon: <People />, href: "/admin/inquiries" },
    { text: "ログアウト", icon: <Logout />, href: "/admin/attendance" },
];
export const AdminAuthenticatedLayout = () => {
    return (
        <RootLayout
            title="管理画面"
            menuItems={menuItems}
        >
            <Outlet />
        </RootLayout>
    );
};
