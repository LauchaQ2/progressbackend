const { getConnection, sql, queries } = require("../database/index.js");

const getPublicaciones = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPublicaciones);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const createNewPublicacion = async (req, res) => {
    const { titulo, descripcion } = req.body;

    if (titulo == null || descripcion == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('titulo', sql.NVarChar, titulo)
            .input('descripcion', sql.NVarChar, descripcion)
            .query('INSERT INTO publicaciones(titulo, descripcion, fecha) OUTPUT INSERTED.id VALUES(@titulo, @descripcion, GetDate())');

        const insertedId = result.recordset[0].id; // Obtiene el ID de la publicacion insertado

        console.log(`Nueva publicacion insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New publicacion created' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = { getPublicaciones, createNewPublicacion };
