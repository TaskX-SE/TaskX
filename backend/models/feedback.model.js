const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');


const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;