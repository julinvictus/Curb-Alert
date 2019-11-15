import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";

const Auth0Button = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
      <span>
        &nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
    </div>
  );
};

export default Auth0Button;