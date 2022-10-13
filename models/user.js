const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    register: {
        type: String,
        required: true,
        trim:true
    },

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
        trim: trim
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
       required
    },
    
})