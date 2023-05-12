const connectDB = require('./database/db');
const Task = require('./models/taskModel');
const tasks = require('./data/tasks');

connectDB();

const importData = async () => {
  try {
    await Task.deleteMany();

    const sampleTasks = tasks.map((task) => {
      return {
        ...task,
      };
    });

    await Task.insertMany(sampleTasks);

    console.log('Data Imported!');
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Task.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
