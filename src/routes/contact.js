
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esSearcValidate, contactExistById } = require('../helpers/db-validators');

const { contactsGet,
        contactByIdGet,
        contactDelete, } = require('../controllers/contact');

const router = Router();


router.get('/',[
    check('phrase').custom( esSearcValidate ),
    validarCampos
], contactsGet );

router.get('/:id',[
    check('id').custom( contactExistById ),
    validarCampos
], contactByIdGet );

router.delete('/:id',[
    check('id').custom( contactExistById ),
    validarCampos
],contactDelete );

router.get('*',(req, res) => {
    res.status(404);
} );

router.post('*',(req, res) => {
    res.status(404);
} );
router.put('*',(req, res) => {
    res.status(404);
} );
router.patch('*',(req, res) => {
    res.status(404);
} );
router.delete('*',(req, res) => {
    res.status(404);
} );





module.exports = router;