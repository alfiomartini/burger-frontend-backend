import axios from "axios";
import { BURGER_BACKEND_URL } from "../constants";
// import { JSON_SERVER_URL } from "../constants";

const client = axios.create();

// use the following baseURL if you want to run the frontend only with
// a json server. In this case you should run 'npm run json:server'.
// client.defaults.baseURL = JSON_SERVER_URL;

// this is the base URL for the node/express server running on docker
client.defaults.baseURL = BURGER_BACKEND_URL;
client.defaults.headers.common["Accept"] = "application/json";

export { client };
