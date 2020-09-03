const express = require('express'),
    router = express.Router(),
    { dashboard, logout} = require('../controllers/admin-controllers'),
    {isAuth} = require('../middleware/isAuth')


//Desc: User Dashboard
//Methhod: GET
//Route: /dashboard
//Access: private
router.route('/dashboard').get( dashboard)



//Desc: Logout
//Methhod: GET
//Route: /logout
//Access: private
router.route('/logout').get( logout)

module.exports = router;