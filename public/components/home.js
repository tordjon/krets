import Layout from "./layout.js";
import { h, useContext } from "../deps_frontend.js"
import { get } from "../utils.js";
import { AuthContext } from "../context/auth_context.js";


const Home = () => {

  const { todo } = useContext(AuthContext);
  console.log("mottok oppdatert todo: ", todo);


  const parse_hash = () => {

    const parsed = {};
    location.hash.substring(1)
      .split("&")
      .map(pair => pair.split("="))
      .forEach(([key, value]) => {

        parsed[key] = value;
      }); 

      return parsed;
  }

  const fetch_user = async () => {

      const url = `https://krets.eu.auth0.com/userinfo`;

      const { access_token } = parse_hash();

      const response = await get(url, {
          headers: {
              "Authorization": `Bearer ${access_token}`
          }
      }); 

      const body = await response.json()
      console.log(body)
  }

  

  return h`<${Layout}>
      <button onClick=${fetch_user}>fetch user</button>
  </${Layout}>`
}


export default Home;