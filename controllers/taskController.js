const Task = require('../models/taskModel');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//@get all incomplete tasks
//@route GET /api/tasks
//@access Public
const getAllIncomplete = async (req, res) => {
  try {
    const tasks = await Task.find({ completed: false }).sort({ name: 1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllComplete = async (req, res) => {
  try {
    const tasks = await Task.find({ completed: true })
      .sort({ name: 1, updatedAt: -1 })
      .limit(10);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//patch a task
const updateTask = async (req, res) => {
  try {
    const id = req.params._id;
    const updateObj = req.body;

    const task = await Task.findById(id);
    task.set({ ...updateObj });
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// Delete all
const deleteAllTasks = async (req, res) => {
  try {
    await Task.deleteMany();
    res.status(200).json({ message: 'all tasks deleted!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// Post new task
const addNewTask = async (req, res) => {
  try {
    // has to be an object
    const taskObj = req.body;
    const newTask = await Task.create(taskObj);
    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTasks,
  getAllIncomplete,
  getAllComplete,
  updateTask,
  deleteAllTasks,
  addNewTask,
};
