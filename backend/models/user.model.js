const mongoose = require('mongoose');

const Schema = mongoose.Schema;
require('mongoose-type-email');

// To specify a default custom error message by overriding :
// mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'
// npm install mongoose-type-email      link: https://www.npmjs.com/package/mongoose-type-email

const userSchema = new Schema(
    {
        googleId: {
          type: String,
          required: true
        },
        displayName: {
          type: String,
          required: true
        },
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        image: {
          type: String,
        },
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
);

const User = mongoose.model('User', userSchema);

module.exports = User;