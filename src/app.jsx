import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import AuthLayout from './layout/authLayout';
import { connect } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
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

function App({ login }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      login(JSON.parse(token));
    }
  }, []);

  return <RouterProvider router={router} />;
}

const mapDispatchToProps = dispatch => ({
  login: data => dispatch({ type: 'AUTH_SUCCESS', payload: data }),
});

export default connect(null, mapDispatchToProps)(App);
