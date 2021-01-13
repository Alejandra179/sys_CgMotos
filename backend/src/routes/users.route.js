const {
    Router
} = require('express');
const router = Router();
const {
    renderSignUpForm,
    signup,
    renderSigninForm,
    signIn,
    logout
    
} = require('../controller/users.controller');

const { userValidatorResult, userValidator } = require('../validaciones/userValidation')
router.get('/signup',renderSignUpForm);
router.post('/signup', userValidator,userValidatorResult,signup)
router.get('/signin',renderSigninForm);
router.post('/signin',signIn);
router.get('/logout', logout); 
module.exports = router;