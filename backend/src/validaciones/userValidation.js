const {
    check,
    validationResult
} = require('express-validator');

exports.userValidatorResult = (req, res, next) => { 
    const resultado = validationResult(req)
    if(!resultado.isEmpty()){
        const error = resultado.array()[0].msg;
        return res.status(422).json({success: false, error: error});

    }
    next();
}
exports.userValidator = [
    check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Ingrese un nombre de usuario'),
    check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Ingrese un correo electrónico')
    .isEmail()
    .withMessage('el correo es inválido'),
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Ingrese una constraseña')
    .isLength({min:6})
    .withMessage('la contraseña debe contener al menos 6 caracteres'),
    
]; 