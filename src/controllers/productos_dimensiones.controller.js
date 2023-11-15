const { getConnection, sql, queries } = require("../database/index.js");

const getProductos_Dimensiones = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos_Dimensiones);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProductos_DimensionesById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos_dimensiones where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const DeleteProductos_DimensionesById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos_dimensiones where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createNewProduct_Dimension = async (req, res) => {
    const { producto_id, nombre } = req.body;

    if (producto_id == null || nombre == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('producto_id', sql.Int, producto_id)
            .input('nombre', sql.NVarChar, nombre)
            .query('INSERT INTO productos_dimensiones(producto_id, nombre) OUTPUT INSERTED.id VALUES(@producto_id, @nombre)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo productos_dimensiones insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = { getProductos_Dimensiones, getProductos_DimensionesById, DeleteProductos_DimensionesById, createNewProduct_Dimension };
