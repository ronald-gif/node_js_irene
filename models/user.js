const mongoose = require('mongoose');
const passportlocalmongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    uniquenumber: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
       type: String,
       required: true
    },
    
})

// what a user will use to login == uniquenumber
userSchema.plugin(passportlocalmongoose, {
    usernameField: 'uniquenumber'
})
// collection for users in db = Registration
module.exports = mongoose.model('Registration', userSchema)