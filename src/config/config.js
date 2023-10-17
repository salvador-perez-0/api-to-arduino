require("dotenv").config();
const { SQL_USER, SQL_PASSWORD, SQL_PORT, SQL_DATABASE, SQL_HOST } =
  process.env;

module.exports = {
  username: SQL_USER,
  password: SQL_PASSWORD,
  database: SQL_DATABASE,
  port: SQL_PORT,
  host: SQL_HOST,
  dialect: "mysql",
};
