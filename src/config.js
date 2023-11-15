require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || 'lautaro.quevedo',
  dbPassword: process.env.DB_PASSWORD || 'Laucha2012!',
  dbServer: process.env.DB_SERVER || '192.168.0.177',
  dbDatabase: process.env.DB_DATABASE || 'progressaluminio'
};
