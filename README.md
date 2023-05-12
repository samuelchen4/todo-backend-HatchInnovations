# Todo Application Back-End Hatch Innovations

Contains the business logic for Todo application.

## Setup Instructions

**NEED MongoDB on local machine to run application**

1. Clone repo on local machine by typing: git clone https://github.com/samuelchen4/todo-backend-HatchInnovations.git
2. Install all dependencies by typing: npm install
3. Run seeder script to input data by typing: npm run data-import
   1. All data can be cleared by typing: npm run data-destroy
4. Check that server is running (message will show in console)

## Features

### Single Column DB

All data is stored in a single collection with each document containing a name and completed property. Although the database is a single column layout, data is queried in two columns (completed tasks, incompleted tasks). This is done so that the completed tasks can be limited to 10 documents in order of most recently edited, while the incompleted can have no limit and can be setup for pagination incase of large task amounts.

### Architecture

API design is seperated into three layers (routes, controllers, models).
