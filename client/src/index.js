import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "./react-auth0-spa";
import { auth0_domain, auth0_clientId } from "./auth_config"

import App from './App';

// Routes the user to the right place after login
const onRedirectCallback = appState => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
    domain={auth0_domain}
    client_id={auth0_clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience={'https://curb-alert-app.herokuapp.com'}
    >
    <App />, 
    </Auth0Provider>,
    document.getElementById('root')
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
