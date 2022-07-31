const { Router } = require('express');
const { check } = require('express-validator');
const { uploadFiles, updateImage } = require('../controllers/uploads');
const { allowedCollections } = require('../helpers/db-validators');
const { validateFile } = require('../middlewares');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/',validateFile, uploadFiles)

router.put('/:collection/:id',[
    validateFile,
    check('id', 'Id invalid').isMongoId(),
    check('collection').custom(c=> allowedCollections(c, ['users', 'products'])),
    validateFields
],updateImage)

module.exports = router;