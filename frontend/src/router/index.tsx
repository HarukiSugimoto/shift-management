import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { RootErrorPage } from '@/app/error';
import { NotFoundPage } from '@/app/not-found';
import { adminAuthenticatedRoutes } from './admin/adminAuthenticatedRoutes';
import { AdminRootLayout } from '@/app/admin/layout';
import { adminUnauthenticatedRoutes } from './admin/adminUnauthenticatedRoutes';

const routes: RouteObject[] = [
  {
    path: '/', // 最上位のルート

    errorElement: <RootErrorPage />, 
    children: [
      {
        path: 'admin/authenticated',
        element: <AdminRootLayout />,
        children: [adminAuthenticatedRoutes]
      },
      {
        path: 'admin/unauthenticated',
        element: <AdminRootLayout />,
        children: [adminUnauthenticatedRoutes]
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export const Router: React.FC = () => <RouterProvider router={router} />;
