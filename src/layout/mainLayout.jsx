import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { AuthContext } from '../context/authContext';

function MainLayout() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user) {
    return navigate('/auth');
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
