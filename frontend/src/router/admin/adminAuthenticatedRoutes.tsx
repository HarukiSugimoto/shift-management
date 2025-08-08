import { AdminAuthenticatedLayout } from '@/app/admin/(authenticated)/layout';
import type { RouteObject } from 'react-router-dom';

export const adminAuthenticatedRoutes: RouteObject = {
    element: <AdminAuthenticatedLayout />,
    children: [
        {
            path: '',
            element: <h1>Admin Authenticated Home</h1>
        }
    ]
}
