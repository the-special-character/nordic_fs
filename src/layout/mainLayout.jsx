import React from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Error from '../components/Error';

function MainLayout({ user }) {
  const navigate = useNavigate();

  if (!user) {
    return navigate('/auth');
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Error />
    </>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(MainLayout);
