const mongoose = require("mongoose");
const { Schema } = mongoose;

const Task = new Schema({
    task: { 
        type: String, 
        require: true 
    },

    isDone: { 
        type: Boolean, 
        default: false 
    },

    responsibleWorkers: {
        type: [String],
        default: []
    },
    
    tags: [{
        difficulty: { 
            type: String,
            default: "easy"
        },
        date: { 
            type: String, 
            default: Date.now 
        }

    }]
});

module.exports = mongoose.model('task', Task);
