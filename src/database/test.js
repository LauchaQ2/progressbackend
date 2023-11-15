const { getConnection } = require("./connection.js");

async function pruebaConexion() {
  try {
    const pool = await getConnection();
    if (pool) {
      const result = await pool.request().query('SELECT TOP 2 * FROM productos');
      console.log('Conexión exitosa:', result.recordset);
      
    }else{
      console.log('Conexión fallida.');
    }
  } catch (error) {
    console.error('Error al ejecutar la prueba de conexión:', error);
    console.error('Error details:', error.details);
  }
}

module.exports = { pruebaConexion };
