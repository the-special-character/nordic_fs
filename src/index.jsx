import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home Page</h1>,
  },
  {
    path: '/about',
    element: <h1>About page</h1>,
  },
  {
    path: '/contact',
    element: <h1>Contact page</h1>,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
