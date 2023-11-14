import { getConnection, sql, queries } from "../database/index.js"


export const getProductos = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos)
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const DeleteProductosById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('DELETE FROM productos where id = @id')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};


export const createNewProduct = async (req, res) => {

    const { nombre, precio } = req.body

    if (nombre == null || precio == null) {
        return res.status(404).json({ msg: 'Bad Request. Fill all fields' })
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .input('precio', sql.Decimal, precio)
            .query('INSERT INTO productos(nombre, precio) OUTPUT INSERTED.id VALUES(@nombre, @precio)');

        const insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado

        console.log(`Nuevo producto insertado con ID: ${insertedId}`);
        res.json({ id: insertedId, msg: 'New product created' });
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const getProductosById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query('SELECT * FROM productos where id = @id')
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};