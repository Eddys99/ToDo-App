const mongoose = require("mongoose");
const { Schema } = mongoose;

const Task = new Schema({
    task: { type: String, require: true },
    isDone: { type: Boolean, default: false }
});

module.exports = mongoose.model('task', Task);
