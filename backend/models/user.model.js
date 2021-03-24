const mongoose = require('mongoose');

const Schema = mongoose.Schema;
require('mongoose-type-email');

// To specify a default custom error message by overriding :
// mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'
// npm install mongoose-type-email      link: https://www.npmjs.com/package/mongoose-type-email

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        index:{
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    phone_no: {
        type: Number,
        required: true,
        unique: true
        // ,
        // validate: {
        //     validator: function(v) {
        //         return /d{10}/.test(v);
        //     },
        //     message: '{VALUE} is not a valid 10 digit number!'
        // }
    },
    university: {
        type: String,
        required: true
    },
    xp: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;