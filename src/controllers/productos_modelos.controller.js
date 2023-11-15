const { getConnection, sql, queries } = require("../database/index.js");

const getProductos_Modelos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos_Modelos);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProductos_ModelosById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos_modelos as pm inner join modelos as m on m.id = pm.modelo_id where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const DeleteProductos_ModelosById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos_modelos where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createNewProduct_Modelo = async (req, res) => {
    const { producto_id, modelo_id } = req.body;

    if (producto_id == null || modelo_id == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('producto_id', sql.Int, producto_id)
            .input('modelo_id', sql.Int, modelo_id)
            .query('INSERT INTO productos_modelos(producto_id, modelo_id) OUTPUT INSERTED.id VALUES(@producto_id, @modelo_id)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo productos_modelos insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = { getProductos_Modelos, getProductos_ModelosById, DeleteProductos_ModelosById, createNewProduct_Modelo };
