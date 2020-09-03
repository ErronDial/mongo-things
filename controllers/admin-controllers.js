

exports.dashboard = (req, res) => {
    res.status(200).send('dashboard')
}

exports.logout = (req, res) => {
    user.loggedIn = false;
    res.status(200).json({
        success: true,
        message: 'You are now logged out'
    })
}