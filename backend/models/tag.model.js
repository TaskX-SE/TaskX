const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tagSchema = new Schema({
    googleId: {
        type: Number,
        required: true
    },
    email: {
        type: Date,
        required: true
    }
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;