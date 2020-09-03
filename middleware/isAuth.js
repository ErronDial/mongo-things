//simple auth middleware to validate user logged in
let isAuth = (req, res, next) => {
    if (!user.loggedIn) return res.status(400).json({
        success: false,
        message: 'This route requires login'
        
    })
    next()
}
