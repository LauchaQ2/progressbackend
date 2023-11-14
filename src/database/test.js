import { getConnection } from "./connection.js";

export async function pruebaConexion() {
    try {
        const pool = await getConnection();
        if (pool) {
            const result = await pool.request().query('SELECT TOP 2 * FROM productos');
            console.log('Conexión exitosa:', result.recordset);
        } else {
            console.error('Error al obtener la conexión.');
        }
    } catch (error) {
        console.error('Error al ejecutar la prueba de conexión:', error);
    }
}


