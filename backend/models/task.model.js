const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDesc: {
        type: String
    },
    taskDuration: {
        type: Number,
        required: true
    },
    taskDeadline: {
        type: Date,
        required: true
    },
    taskCategory: {
        type: Number,   // 1: fixed task, 2: dynamic task, 3: optional task, 4: meeting
        required: true  
    },
    taskPriority: {
        type: Number,
        required: true,
        default: 1
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;