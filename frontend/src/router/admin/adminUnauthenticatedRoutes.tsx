import { UnauthenticatedHomePage } from "@/app/admin/(unauthenticated)";
import { AdminUnauthenticatedLayout } from "@/app/admin/(unauthenticated)/layout";
import { SignInPage } from "@/app/admin/(unauthenticated)/sign-in";
import type { RouteObject } from "react-router-dom";

export const adminUnauthenticatedRoutes: RouteObject = {
    element: <AdminUnauthenticatedLayout />,
    children: [
        {
            path: '',
            element: <UnauthenticatedHomePage />
        },
        {
            path: 'sign-in',
            element: <SignInPage />
        }
    ]
}
