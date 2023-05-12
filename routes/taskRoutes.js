const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  getAllIncomplete,
  getAllComplete,
  updateTask,
  deleteAllTasks,
  addNewTask,
} = require('../controllers/taskController');

router.route('/completed').get(getAllComplete);
router.route('/incompleted').get(getAllIncomplete);
router.route('/post').post(addNewTask);
router.route('/update/:_id').put(updateTask);
router.route('/delete').delete(deleteAllTasks);

module.exports = router;
