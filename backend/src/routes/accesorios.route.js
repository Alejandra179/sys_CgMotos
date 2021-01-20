const {
    Router
} = require('express');
const upload = require('../helpers/storage');
const router = Router();
const { 
    getAccesorios,
    getAccesorio,
    createAntiparra,
    renderFormAntiparra,
    renderEdit,
    updateAntiparra,
    deleteAntiparra,
    renderFormBaul,
    createBaul,
    updateBaul,
    deleteBaul
} = require('../controller/accesorios.controller');

const {accesorioValidator, accesorioValidatorResult} = require('../validaciones/accesoriosValidator');

router.get('/', getAccesorios);
router.get('/antiparraAdd',renderFormAntiparra);
router.get('/:id',getAccesorio);
router.post('/antiparraCreate',upload.single('imagen'),createAntiparra);
router.get('/edit/:id', renderEdit);
router.put('/update/:id',updateAntiparra);
router.delete('/delete/:id', deleteAntiparra);
router.get('/baulAdd',renderFormBaul);
router.post('/baulCreate',upload.single('imagen'),createBaul);
router.put('/update/:id')

module.exports = router; 