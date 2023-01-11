import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import './main.css';
import MainLayout from './layout/mainLayout';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import AuthLayout from './layout/authLayout';
import { LocaleProvider } from './context/locale';
import { AuthProvider } from './context/authContext';
import { ProductsProvider } from './context/productsContext';
import { CartProvider } from './context/cartContext';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Home Page</h1>,
//   },
//   {
//     path: '/about',
//     element: <h1>About page</h1>,
//   },
//   {
//     path: '/contact',
//     element: <h1>Contact page</h1>,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProductsProvider>
            <CartProvider>
              <MainLayout />
            </CartProvider>
          </ProductsProvider>
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <AuthProvider>
    <LocaleProvider>
      <RouterProvider router={router} />
    </LocaleProvider>
  </AuthProvider>
);
