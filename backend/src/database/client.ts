import mysql, { PoolOptions } from "mysql2/promise";
import "dotenv/config";

// Create the connection pool. The pool-specific settings are the defaults

let user: string | undefined,
  host: string | undefined,
  password: string | undefined,
  port: number | undefined;

const environment = process.env.BACKEND_ENV;
console.log("environment", environment);

if (environment === "aws") {
  user = process.env.MYSQL_AWS_USER;
  host = process.env.MYSQL_AWS_HOST;
  password = process.env.MYSQL_AWS_PWD;
  port = parseInt(process.env.MYSQL_AWS_PORT || "3306");
} else if (environment === "docker") {
  user = process.env.MYSQL_USER;
  host = process.env.MYSQL_DOCKER_HOST;
  password = process.env.MYSQL_PWD;
  port = parseInt(process.env.MYSQL_DOCKER_PORT || "3306");
} else {
  // localhost
  user = process.env.MYSQL_USER;
  host = process.env.MYSQL_HOST;
  password = process.env.MYSQL_PWD;
  port = parseInt(process.env.MYSQL_LOCALHOST_PORT || "3306");
}

const access: PoolOptions = {
  host: host,
  user: user,
  database: process.env.MYSQL_DB,
  password: password,
  port: port,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};
const pool = mysql.createPool(access);

export { pool as connection };
