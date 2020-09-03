const User = require('../models/User');
bcrypt = require('bcryptjs')

exports.home = (req, res) => {
    res.status(200).send('Hello World')

}

exports.postRegistration = async (req, res) => {
    let { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password
    })
    res.status(201).json({
        success: true,
        data: user
    })
}


//Desc: Post login
//Methhod: POST
//Route: /login
//Access: public
//Recieve incoming body request
//check for user in db
//set user as loggedIn
exports.login = async (req, res) => {
    //Destructor the incoming request body
    let { email, password } = req.body;
    try {
        let user = await User.findOne({email});
        // Check if user was found if not send beautiful message
        if (!user) return res.status(400).json({ success: false, data: 'Email or password is incorrect' })
        // Once user is found by their email or user name (if  that is what your searching by) check password with password in db
        console.log(typeof password)
        const passwordMatch = await bcrypt.compare(password, user.password)
        //send user message if password does not match
        if (!passwordMatch) return res.status(400).json({success: false, data: "Email or password is incorrect"})

        req.session.isLoggedIn = true
        req.session.user = user
        await req.session.save();
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (err) {
        console.log(err)
    }


}




