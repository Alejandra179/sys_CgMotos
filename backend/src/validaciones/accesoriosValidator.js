const {
    check,
    validationResult
} = require('express-validator');

exports.accesorioValidatorResult = (req, res, next) => { 
    const resultado = validationResult(req)
    if(!resultado.isEmpty()){
        const error = resultado.array()[0].msg;
        return res.status(422).json({success: false, error: error});

    }
    next();
}
exports.accesorioValidator = [
    check('descripcion')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Ingrese una descripcion'),
    
    
]; 