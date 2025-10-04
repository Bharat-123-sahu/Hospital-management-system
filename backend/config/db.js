import mysql2, { createConnection } from "mysql2";

const Db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"manage-ecommerce"
});
export default Db;
