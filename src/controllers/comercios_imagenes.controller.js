const { getConnection, sql, queries } = require("../database/index.js");

const getComercios_Imagenes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllComercios_Imagenes);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createNewComercios_Imagenes = async (req, res) => {
    const { image_path } = req.body;

    if (image_path == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('image_path', sql.NVarChar, image_path)
            .query('INSERT INTO comercios_imagenes( image_path) OUTPUT INSERTED.id VALUES(@image_path)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo comercios_imagenes insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const DeleteComercioById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM comercios_imagenes where id = @id');
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = { getComercios_Imagenes, createNewComercios_Imagenes, DeleteComercioById };
