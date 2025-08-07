import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { RootErrorPage } from '@/app/error';
import { NotFoundPage } from '@/app/not-found';
import { AdminAuthenticatedLayout } from '@/app/admin/(authenticated)/layout';
import { AdminUnauthenticatedLayout } from '@/app/admin/(unauthenticated)/layout';

const routes: RouteObject[] = [
  {
    path: '/', // 最上位のルート

    errorElement: <RootErrorPage />, 
    children: [
      {
        path: 'admin/authenticated',
        element: <AdminAuthenticatedLayout />
      },
      {
        path: 'admin/unauthenticated',
        element: <AdminUnauthenticatedLayout />
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
