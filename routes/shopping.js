const { Router } = require('express');
const { check } = require('express-validator');
const { postShopping, getShoppingByCustomer } = require('../controllers/shopping');
const { validateJWT } = require('../middlewares');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/:id',[
    validateFields
], getShoppingByCustomer)

router.post('/', [
    validateJWT,
    validateFields
], postShopping)


module.exports = router;