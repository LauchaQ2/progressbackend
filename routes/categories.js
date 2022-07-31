const { Router } = require('express');
const { check } = require('express-validator');
const { createCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categories');
const { categoryIdExist } = require('../helpers/db-validators');
const { validateJWT, isAdminRole } = require('../middlewares');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();



router.get('/', getCategories, (req, res) => {
    res.json('get')
})

router.get('/:id', [
    check('id', 'Id not valid').isMongoId(),
    check('id').custom(categoryIdExist),
    validateFields
], getCategory);

router.post('/', [
    validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    validateFields
], createCategory)

router.put('/:id',[
    validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    check('id').custom(categoryIdExist),
    validateFields
], updateCategory)
router.delete('/:id',[
    validateJWT,
    isAdminRole,
    check('id', 'Id not valid').isMongoId(),
    validateFields,
    check('id').custom(categoryIdExist),
    validateFields
], deleteCategory)



module.exports = router;