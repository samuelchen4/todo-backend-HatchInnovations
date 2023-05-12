const express = require('express');
const connectDB = require('./database/db');
const taskRoutes = require('./routes/taskRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(3001, () => {
  console.log(`Server is running on port: 3001`);
});
