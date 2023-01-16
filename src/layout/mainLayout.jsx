<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
=======
import React, { useContext } from 'react';
>>>>>>> 1e1eb24a7011c5973955e6c23f91f7c387816f71
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { AuthContext } from '../context/authContext';

<<<<<<< HEAD
function MainLayout({ user }) {
  const navigate = useNavigate();
=======
function MainLayout() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
>>>>>>> 1e1eb24a7011c5973955e6c23f91f7c387816f71

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

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MainLayout);
