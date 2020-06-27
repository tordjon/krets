import auth0 from '../../../auth/auth0';
import {users} from "../../../database/users";
import { BAD_REQUEST } from '../../../http/codes';


const createIfNotPresent = async (id: string) => {

  const user = await users.getUser(id);

  if (!user) {

    await users.createUser({id});
  }
};

export default async function callback(req, res) {
  console.log("heio")
}