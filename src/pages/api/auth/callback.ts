import {users} from "../../../database/users";


const createIfNotPresent = async (id: string) => {

  const user = await users.getUser(id);

  if (!user) {

    await users.createUser({id});
  }
};

export default async function callback(req, res) {
  console.log("heio")
}