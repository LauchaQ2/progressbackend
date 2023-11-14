import { getConnection, sql, queries } from "../database/index.js"


export const getModelos = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllModelos)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


export const createNewModelo = async (req, res) => {

    const { nombre } = req.body

    if (nombre == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' })
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .query('INSERT INTO modelos(nombre) VALUES(@nombre)')

        console.log(nombre)
        res.json("new modelo")
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }



}