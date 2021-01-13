const {
    check,
    validationResult
} = require('express-validator');

exports.accesoriosValidatorResult = (req, res, next) => {
    const resultado = validationResult(req)
    if (!resultado.isEmpty()) {
        const error = resultado.array()[0].msg;
        return res.status(422).json({
            success: false,
            error: error
        });
    }
    next();
}
exports.accesoriosValidator = [
    
    check('descripcion')
    .trim()
    .not()
    .isEmpty().withMessage('Ingrese una descripción'),
    check('marca_producto').trim().isEmpty().withMessage('debe ingresar una marca'),
    check('precio').trim().isEmpty().withMessage('Ingrese precio unitario del producto'),
    check('cantidad').trim().isEmpty().isInt().withMessage('Ingrese una cantidad válida'),
    
];