import { getConnection, sql, queries } from "../database/index.js"


export const getProductos_Imagenes = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos_Imagenes)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const DeleteProductos_ImagenesById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos_imagenes where producto_id = @id')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const createNewProduct_Imagenes = async (req, res) => {

    const { producto_id, image_path } = req.body

    if (producto_id == null || image_path == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' })
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('producto_id', sql.Int, producto_id)
            .input('image_path', sql.NVarChar, image_path)
            .query('INSERT INTO productos_imagenes(producto_id, image_path) OUTPUT INSERTED.id VALUES(@producto_id, @image_path)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo producto_imagenes insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }



}

export const getProductos_ImagenesById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos_imagenes where producto_id = @id')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

