import auth0 from '../../../auth/auth0';

export default auth0.requireAuthentication(async function me (request, response) {
    console.log("who u")
});