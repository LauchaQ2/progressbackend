const { getConnection, sql, queries } = require("../database/index.js");

const getProductos_Material = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos_Materiales);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProductos_MaterialById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos_materiales as pm inner join materiales as m on m.id = pm.material_id where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const DeleteProductos_MaterialesById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos_materiales where producto_id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createNewProduct_Material = async (req, res) => {
    const { producto_id, material_id } = req.body;

    if (producto_id == null || material_id == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('producto_id', sql.Int, producto_id)
            .input('material_id', sql.Int, material_id)
            .query('INSERT INTO productos_materiales(producto_id, material_id) OUTPUT INSERTED.id VALUES(@producto_id, @material_id)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo productos_materiales insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = { getProductos_Material, getProductos_MaterialById, DeleteProductos_MaterialesById, createNewProduct_Material };
