const mongoose = require('mongoose'),
    schema = mongoose.Schema,
    bcrypt = require ('bcryptjs');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true

    },
    age: {
        type: Number,
        trim: true,
        required: false
    },
    about: {
        type: String,
        trim: true,
        required: false
    },
    password: {
        type: String,
        required: true

    }
},{timestamps: true})


UserSchema.pre('save' ,async function (next){
    try{
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }catch(err) {
     console.log(err)
    }
})




module.exports = mongoose.model('User', UserSchema)