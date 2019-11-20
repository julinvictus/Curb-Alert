require('dotenv').config();

const auth0_domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0_clientId = process.env.REACT_APP_AUTH0_CLIENTID;

export { auth0_domain, auth0_clientId };