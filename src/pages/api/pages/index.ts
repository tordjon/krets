import auth0 from "../../../auth/auth0";
import {pages} from "../../../database/pages";
import { CREATED, OK } from "../../../http/codes";
import { PageModel } from "../../../models";


export default auth0.requireAuthentication(async function brand (request, response) {

   console.log("uh")
});

