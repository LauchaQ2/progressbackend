const bodyParser = require('body-parser');
const { Router } = require('express');
const { usersGet,
    usersPut,
    usersDelete,
    usersPost,
    usersPatch } = require('../controllers/users');

const router = Router();
const jsonParser = bodyParser.json();
router.get('/', usersGet)

router.put('/:id', usersPut)
router.post('/',jsonParser, usersPost)
router.delete('/', usersDelete)
router.patch('/', usersPatch)

module.exports = router;

