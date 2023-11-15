const sql = require('mssql');
const { pruebaConexion } = require("../database/test.js");
const config = require('../config.js');

const dbsettings = {
    user: 'lautaro.quevedo',
    password: 'Laucha2012!',
    server: '192.168.0.177',
    database: 'progressaluminio',
    port: 1433,
    encrypt: false,
    options: {
        trustServerCertificate: true,
        encrypt: false,
        connectTimeout: 30000
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return pool;
        console.log("conexion ok")
    } catch (error) {
        console.log(error);
    }
}


module.exports = { sql, getConnection };
