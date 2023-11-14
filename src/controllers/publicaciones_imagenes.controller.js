import { getConnection, sql, queries } from "../database/index.js"


export const getPublicaciones_Imagenes = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPublicaciones_Imagenes)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


export const createNewPublicaciones_Imagenes = async (req, res) => {

    const { publicacion_id, image_path } = req.body

    if (publicacion_id == null || image_path == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' })
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('publicacion_id', sql.Int, publicacion_id)
            .input('image_path', sql.NVarChar, image_path)
            .query('INSERT INTO publicaciones_imagenes(publicacion_id, image_path) OUTPUT INSERTED.id VALUES(@publicacion_id, @image_path)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo publicaciones_imagenes insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }



}