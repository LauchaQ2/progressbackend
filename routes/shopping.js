const { Router } = require('express');
const { check } = require('express-validator');
const { postShopping } = require('../controllers/shopping');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', [validateFields],postShopping, (req, res)=>{
    res.json('shopping')
})


module.exports = router;