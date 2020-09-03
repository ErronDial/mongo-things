const express = require('express'),
    router = express.Router(),
    {home, postRegistration, dashboard, login, logout} = require('../controllers/public-controller');

//Routes for the user
//Desc: Home/Index
//Methhod: GET
//Route: /
//Access: public 
router.route('/').get(home)

//Desc: Post login
//Methhod: POST
//Route: /login
//Access: public
//Recieve incoming body request
//check for user in db
//set user as loggedIn
router.route('/login').post(login)

//Desc: Register
//Methhod: GET
//Route: /register
//Access: public 
router.route('/register').post(postRegistration)


module.exports = router;