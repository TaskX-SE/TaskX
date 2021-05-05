const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sessionSchema = new Schema({
    taskId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    sessionDuration: {
        type: Number,
        required: true
    },
    sessionDeadline: {
        type: Date,
        required: true
    },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;