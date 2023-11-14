import { getConnection, sql, queries } from "../database/index.js"


export const getMateriales = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllMateriales)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


export const createNewMaterial = async (req, res) => {

    const { nombre } = req.body

    if (nombre == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .query('INSERT INTO materiales(nombre) VALUES(@nombre)')

        console.log(nombre)
        res.json("new material")
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }



}