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
    renderEditAntiparra,
    updateAntiparra,
    deleteAntiparra,
} = require('../controller/accesorios.controller');

const {accesoriosValidator, accesoriosValidatorResult} = require('../validaciones/accesoriosValidator');

router.get('/', getAccesorios);
router.get('/antiparraAdd',renderFormAntiparra);
router.get('/:id',getAccesorio);
router.post('/antiparraCreate',upload.single('imagen'),accesoriosValidator
,accesoriosValidatorResult, createAntiparra);
router.get('/edit/:id', renderEditAntiparra);
router.put('/update/:id',updateAntiparra,accesoriosValidator,accesoriosValidatorResult,);
router.delete('/delete/:id', deleteAntiparra);
/* const {
    createAccesorio,
    addAccesorio,
    renderAccesorios,
    renderEdit,
    updateAccesorio
} = require('../controller/accesorios.controller.js')

const { accesoriosValidatorResult, accesoriosValidator } = require('../validaciones/accesoriosValidator')
router.get('/accesorios/add', addAccesorio);
router.post('/accesorios/new-accesorio', accesoriosValidator,accesoriosValidatorResult,createAccesorio);
router.get('/accesorios',renderAccesorios);
router.get('/accesorios/edit/:id',renderEdit);
router.put('/accesorios/edit/:id',updateAccesorio);
 */

module.exports = router; 