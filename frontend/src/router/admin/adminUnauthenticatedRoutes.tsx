import { AdminUnauthenticatedLayout } from "@/app/admin/(unauthenticated)/layout";
import type { RouteObject } from "react-router-dom";

export const adminUnauthenticatedRoutes: RouteObject = {
    element: <AdminUnauthenticatedLayout />,
    children: [
        {
            path: '',
            element: <h1>Admin Unauthenticated Home</h1>
        }
    ]
}
