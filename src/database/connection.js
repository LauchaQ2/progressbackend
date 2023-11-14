import sql from 'mssql'
import { pruebaConexion } from "../database/test.js";
import config from '../config.js';


const dbsettings = {
    user: 'lautaro.quevedo',
    password: 'Laucha2012!',
    server: '192.168.0.177',
    database: 'progressaluminio',
    port: 1433,
    encrypt: false,
    options:{
        trustServerCertificate: true,
        encrypt: false
    }
}


export async function getConnection(){

    try {
        const pool = await sql.connect(dbsettings)
        return pool
    } catch (error) {
        console.log(error)
    }
   
}

pruebaConexion()

export {sql};