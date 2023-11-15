const { getConnection, sql, queries } = require("../database/index.js");

async function getUsos(req, res) {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsos);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function createNewUso(req, res) {
    const { nombre } = req.body;

    if (nombre == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' });
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .query('INSERT INTO usos(nombre) VALUES(@nombre)');

        console.log(nombre);
        res.json("new uso");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getUsos,
    createNewUso
};
