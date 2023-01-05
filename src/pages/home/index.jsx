import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

function Home() {
  const { logout, user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{user.user.name}</h2>
      <h2>{user.user.email}</h2>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
