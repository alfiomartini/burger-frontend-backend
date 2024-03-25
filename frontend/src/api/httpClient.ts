import axios from "axios";
import { BURGER_DOCKER_URL, BURGER_AWS_URL } from "../constants";
// import { JSON_SERVER_URL } from "../constants";

const client = axios.create();
let BACKEND_URL: string | undefined;
const environment: string | undefined = import.meta.env.VITE_BACKEND;
console.log("environment=", environment);

if (environment === "aws") {
  BACKEND_URL = BURGER_AWS_URL;
} else {
  BACKEND_URL = BURGER_DOCKER_URL;
}

console.log("BACKEND_URL=", BACKEND_URL);

// use the following baseURL if you want to run the frontend only with
// a json server. In this case you should run 'npm run json:server'.
// client.defaults.baseURL = JSON_SERVER_URL;

// this is the base URL for the node/express server running on docker
client.defaults.baseURL = BACKEND_URL;
client.defaults.headers.common["Accept"] = "application/json";

export { client };
