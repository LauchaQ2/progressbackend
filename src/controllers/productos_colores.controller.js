const { getConnection, sql, queries } = require("../database/index.js");

const getProductos_Colores = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos_Colores);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProductos_ColoresById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos_colores as pc inner join colores as c on c.id = pc.color_id where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const DeleteProductos_ColoresById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos_colores where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createNewProduct_Color = async (req, res) => {
    const { producto_id, color_id } = req.body;

    if (producto_id == null || color_id == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('producto_id', sql.Int, producto_id)
            .input('color_id', sql.Int, color_id)
            .query('INSERT INTO productos_colores(producto_id, color_id) OUTPUT INSERTED.id VALUES(@producto_id, @color_id)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo producto_colores insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = { getProductos_Colores, getProductos_ColoresById, DeleteProductos_ColoresById, createNewProduct_Color };
