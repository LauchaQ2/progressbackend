const { Router } = require('express');
const { check } = require('express-validator');
const { postClient, getClients } = require('../controllers/clients');
const { postShopping, getShoppingByCustomer } = require('../controllers/shopping');
const { validateJWT } = require('../middlewares');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/',[
    validateFields
], getClients)

router.post('/', [
    validateJWT,
    validateFields
], postClient)


module.exports = router;