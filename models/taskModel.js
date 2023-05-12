const mongoose = require('mongoose');

//Schema for a single document
const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// methods for that collection
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
