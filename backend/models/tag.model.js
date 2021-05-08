const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const tagSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    }
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;