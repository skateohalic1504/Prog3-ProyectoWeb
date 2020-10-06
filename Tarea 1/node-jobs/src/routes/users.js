const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
  successRedirect: '/jobs',
  failureRedirect: '/users/signin',
  failureFlash: true  
}));



//Registro

router.get('/users/signup', (req, res) => {
    res.render('users/signup')
});

router.post('/users/signup', async (req, res) =>{
const {tuser, name, email, password, confirm_password} = req.body;
const errors = [];
if(name.length <= 0 || password.length <= 0)
{
    errors.push({text: 'No puede dejar ningun campo vacio'});
};
if(password != confirm_password){
    errors.push({text: 'Las claves son diferentes'});
    };
    if (password.length < 4)
    {
        errors.push({text: 'La Clave debe ser mayor a 4 caracteres'});
    };
    if(errors.length > 0){
        res.render('users/signup', {errors, tuser, name, email, password, confirm_password});
    } else {
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'Este Correo ya esta registrado');
       res.redirect('/users/signup');
        }
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Registro Realizado Correctamente');
        res.redirect('/users/signin');
    }

});


router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});








module.exports = router;