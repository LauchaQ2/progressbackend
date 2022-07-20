const bodyParser = require('body-parser');
const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet,
    usersPut,
    usersDelete,
    usersPost,
    usersPatch } = require('../controllers/users');
const { isRoleValid, isEmailExist, userIdExist } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();
const jsonParser = bodyParser.json();
//GET
router.get('/', usersGet)
//PUT
router.put('/:id', [
    check('id', "ID not valid").isMongoId(),
    check('id').custom(userIdExist),
    check('role').custom(isRoleValid),
    validateFields
],
    usersPut)
//POST
router.post('/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('password', 'Password is required and must contain minimum 6 characters.').isLength({ min: 6 }),
        check('email').custom(isEmailExist),
        /*         check('role', 'Role not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),*/
        check('role').custom(isRoleValid),
        jsonParser,
        validateFields
    ]
    , usersPost)
//DELETE
router.delete('/:id',
    check('id', "ID not valid").isMongoId(),
    check('id').custom(userIdExist),
    validateFields
    , usersDelete)
//PATCH
router.patch('/', usersPatch)

module.exports = router;

