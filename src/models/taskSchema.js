const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
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
            type: Date, 
            default: Date.now 
        }
    }],
    
    countWorkers: {
        type: Number
    },

    tagsCount: {
        type: Number,
        default: 1
    },
    
    countWorkersV2: {
        type: Number
    },

    tagsCountV2: {
        type: Number,
        default: 1
    },

    deleted: {
        type: Boolean,
        default: false
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: null
    },

    deleted_at: {
        type: Date,
        default: null
    }
});

TaskSchema.methods.addWorker = function(workers) {
    let updated_at_flag = false;
    for (let i in workers) {
        if (this.responsibleWorkers.indexOf(workers[i]) === -1) {
            this.responsibleWorkers.push(workers[i]);
            updated_at_flag = true;
        }
    }
    if (updated_at_flag === true) {
        this.countWorkersV2 = this.responsibleWorkers.length;
        this.updated_at = Date.now();
    }
}

TaskSchema.methods.removeWorker = function(worker) {
    let removeItemIndex = this.responsibleWorkers.indexOf(worker);
    if (removeItemIndex > -1) {
        this.responsibleWorkers.splice(removeItemIndex, 1);
        this.countWorkersV2 = this.responsibleWorkers.length;
        this.updated_at = Date.now();
    }
}

TaskSchema.methods.addTag = function(tag) {
    let updated_at_flag = false;
    let diffObj = { difficulty: tag };
    let checkIfItemExists = this.tags.map(function(e) { return e.difficulty }).indexOf(tag);
    if (checkIfItemExists === -1) {
        this.tags.push(diffObj);
        updated_at_flag = true;
    }
    if (updated_at_flag === true) {
        this.tagsCountV2 = this.tags.length;
        this.updated_at = Date.now();
    }
}

TaskSchema.methods.removeTag = function(tag) {
    let updated_at_flag = false;
    let removeItemIndex = this.tags.map(function(e) { return e.difficulty }).indexOf(tag);
    if (removeItemIndex > -1) {
        this.tags.splice(removeItemIndex, 1);
        updated_at_flag = true;
    }
    if (updated_at_flag === true) {
        this.tagsCountV2 = this.tags.length;
        this.updated_at = Date.now();
    }
}

module.exports = mongoose.model('Task', TaskSchema);