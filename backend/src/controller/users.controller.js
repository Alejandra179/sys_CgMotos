const usersCtrl = {};
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req, res)=> res.send('obtener formulario');

usersCtrl.signup = async (req, res)=>{
    const user = await User.findOne({email: req.body.email});
    if(!user==""){
        res.status(400).json({
            success:false,
            message: `el correo ${user.email} ya existe`
        })
    }
    else{
        const {name, email,password,password_confirm} = req.body;
        if (password != password_confirm){
            res.status(400).json({
                success: false,
                message:'las contraseñas no coinciden'
            })
        } 
        else{
            const newUser = new User({
                name,
                email,
                password,
            });
            newUser.password = await newUser.encryptPassword(password);
            console.log(newUser);
            res.status(201).json({
                success:true,
                user: {name, email,password,} 
            })
            await newUser.save(); 

        } 
        
    }
}

usersCtrl.renderSigninForm = (req, res) =>{
    res.send('formulario de logeo');
}

usersCtrl.signIn = async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user !=""){
        res.status(401).json({
            success: false,
            error: 'usuario no encontrado'
        })

    }
    else{
        const isMatch  = await user.compairePassword(password);
        if(!isMatch){
            res.status(401).json({
            success: false,
            error: 'contraseña incorrecto'
            })
            res.json({success:true, user})
        }

    }
}

/* usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
}) */

usersCtrl.logout = (req, res) =>{
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.send('sesion terminada')
}   

module.exports = usersCtrl;