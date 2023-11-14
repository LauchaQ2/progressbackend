const express = require('express');
const router = express.Router();
const productController = require('../queries/productQueries');

// Ruta para obtener todos los productos
router.get('/api/products', productController.getAllProducts);

// // Ruta para crear un nuevo producto
// router.post('/api/products', productController.createProduct);

// // Ruta para actualizar un producto existente por ID
// router.put('/api/products/:id', productController.updateProduct);

// // Ruta para eliminar un producto por ID
// router.delete('/api/products/:id', productController.deleteProduct);

module.exports = router;


// const { Router } = require('express');
// const { check } = require('express-validator');
// const { createProduct, getProducts, getProduct, updateProduct, deleteProduct, paymentMercadoPago } = require('../controllers/products');
// const { productIdExist, categoryIdExist } = require('../helpers/db-validators');
// const { validateJWT, isAdminRole } = require('../middlewares');

// const { validateFields } = require('../middlewares/validate-fields');

// const router = Router();



// router.get('/', getProducts, (req, res) => {
//     res.json('get')
// })

// router.get('/:id', [
//     check('id', 'Id not valid').isMongoId(),
//     check('id').custom(productIdExist),
//     validateFields
// ], getProduct);

// router.post('/', [
//     validateJWT,
//     check('name', 'Name is required').not().isEmpty(),
//     check('price', 'Price is required').not().isEmpty(),
//     check('category', 'Id not valid').isMongoId(),
//     check('category').custom(categoryIdExist),
//     validateFields
// ], createProduct)

// router.post('/payment',[validateFields], paymentMercadoPago,(req, res) => {
//     res.json('payment')
// })

// router.put('/:id',[
//     validateJWT,
//     check('id').custom(productIdExist),
//     validateFields
// ], updateProduct)
// router.delete('/:id',[
//     validateJWT,
//     isAdminRole,
//     check('id', 'Id not valid').isMongoId(),
//     validateFields,
//     check('id').custom(productIdExist),
//     validateFields
// ], deleteProduct)



// module.exports = router;