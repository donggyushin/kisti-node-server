import Sequelize from "sequelize";

var env = process.env.NODE_ENV || "production";
console.log("env: ", env);

let DATABASE_NAME = "";
let USER_NAME = "";
let PASSWORD = "";
let HOST = "localhost";

if (env == "production") {
  DATABASE_NAME = "kisti";
  USER_NAME = "kisti";
  PASSWORD = "qmffhrcPdls!2";
} else if (env == "second") {
  DATABASE_NAME = "kisti";
  USER_NAME = "kisti";
  PASSWORD = "qmffhrcPdls!2";
  HOST = "220.67.154.76";
} else {
  DATABASE_NAME = "kisti";
  USER_NAME = "root";
  PASSWORD = "1234";
}

const DB_CONNECTION_POOL_OPTIONS = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};
const DB_CONNECTION_OPTIONS = {
  host: HOST,
  dialect: "mysql",
  pool: DB_CONNECTION_POOL_OPTIONS,
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true
  }
};

const sequelize = new Sequelize(
  DATABASE_NAME,
  USER_NAME,
  PASSWORD,
  DB_CONNECTION_OPTIONS
);
sequelize
  .authenticate()
  .then(() => console.log("DB connection has been established successfully"))
  .catch(err => console.log("Unable to connect to the database: ", err));

sequelize.sync({ force: false });

export default sequelize;
