require('dotenv').config();

const auth0_domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0_clientId = process.env.REACT_APP_AUTH0_CLIENTID;

// const auth0_domain = process.env.AUTH0_DOMAIN;
// const auth0_clientId = process.env.AUTH0_CLIENT_ID;

export { auth0_domain, auth0_clientId };