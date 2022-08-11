const { Router } = require('express');
const { check } = require('express-validator');
const { postShopping } = require('../controllers/shopping');
const { validateJWT } = require('../middlewares');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', [
    validateJWT,
    validateFields
], postShopping)


module.exports = router;