import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications"; // 通知アイコン
import React from "react";

interface NotificationButtonProps {
    href: string;
    notificationsNumber: number;
}

export const NotificationButton: React.FC<NotificationButtonProps> = (props) => {
    return (
        <IconButton component="a" href={props.href} color="inherit">
            <Badge
                badgeContent={props.notificationsNumber}
                color="error"
                invisible={props.notificationsNumber === 0}
            >
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};
