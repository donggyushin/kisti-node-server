import Sequelize from "sequelize";

const DATABASE_NAME = "kisti";
const USER_NAME = "root";
const PASSWORD = "1234";
const DB_CONNECTION_POOL_OPTIONS = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};
const DB_CONNECTION_OPTIONS = {
  host: "localhost",
  dialect: "mysql",
  pool: DB_CONNECTION_POOL_OPTIONS
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
