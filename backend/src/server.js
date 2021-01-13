const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session'); 
const passport = require('passport');



//inicializacion
const app = express();
require('./config/passport');

//config
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname,'views'));



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.json());

app.use(methodOverride('_method'));
app.use(session({
    secret: 'cgmotos',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//vaiables globales

app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
})

//rutas
app.use('/account',require('./routes/users.route'));
/* 
app.use('/lubicantes',require('./routes/lubricantes.route')); 
app.use('/ruedas',require('./routes/ruedas.route'));
app.use('/motor',require('./routes/motor.route'));
app.use('/retenes',require('./routes/retenes.route')) */
app.use('/accesorios',require('./routes/accesorios.route'))
//archivos estaticos como ser el css o fuente de letras
app.use(express.static(path.join(__dirname,'public'))) 

module.exports = app;