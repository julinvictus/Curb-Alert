import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";

const Auth0Button = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    
    <div>
      {!isAuthenticated && (
              <div>
        <button class="mini ui button"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in to post free stuff!
        </button>
      </div>

      )}

      {isAuthenticated && user && (
        
      <span>
        &nbsp;
        <Link to="/take-pic">
          <i class="large camera icon"></i>
        </Link>
        {/* <Link to="/profile"> */}
          <img 
            class="ui avatar image"
            src={user.picture}
            width="50"
          /> 
          
        {/* </Link> */}
      </span>
    )}

    {isAuthenticated && <button class="mini ui button" onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default Auth0Button;