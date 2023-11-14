import { getConnection, sql, queries } from "../database/index.js"


export const getProductos_Usos = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos_Usos)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getProductos_UsosById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos_usos as pu inner join usos as u on u.id = pu.uso_id where producto_id = @id')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const DeleteProductos_UsosById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos_usos where producto_id = @id')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};



export const createNewProduct_Uso = async (req, res) => {

    const { producto_id, uso_id } = req.body

    if (producto_id == null || uso_id == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' })
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('producto_id', sql.Int, producto_id)
            .input('uso_id', sql.Int, uso_id)
            .query('INSERT INTO productos_usos(producto_id, uso_id) OUTPUT INSERTED.id VALUES(@producto_id, @uso_id)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo productos_usos insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }



}