const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT,
    db_connection: process.env.DB_CONNECTION_STRING
};