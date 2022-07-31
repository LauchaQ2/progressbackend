const { Router } = require('express');
const { check } = require('express-validator');
const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/products');
const { productIdExist, categoryIdExist } = require('../helpers/db-validators');
const { validateJWT, isAdminRole } = require('../middlewares');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();



router.get('/', getProducts, (req, res) => {
    res.json('get')
})

router.get('/:id', [
    check('id', 'Id not valid').isMongoId(),
    check('id').custom(productIdExist),
    validateFields
], getProduct);

router.post('/', [
    validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('category', 'Id not valid').isMongoId(),
    check('category').custom(categoryIdExist),
    validateFields
], createProduct)

router.put('/:id',[
    validateJWT,
    check('id').custom(productIdExist),
    validateFields
], updateProduct)
router.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id', 'Id not valid').isMongoId(),
    validateFields,
    check('id').custom(productIdExist),
    validateFields
], deleteProduct)



module.exports = router;