const router = require('express').Router();
let Task = require('../models/task.model');
const mongoose = require("mongoose")

// const connectDB = async () => {
// try{
//   const conn = await mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   console.log(`MongoDB Connected: ${conn.connection.host}`)
// }catch(err)
// {
//   console.error(err);
//   process.exit(1)
// }

// }

// function getNextSequence(name) {
//   var ret = connectDB.collection('taskCounterCollection').findAndModify(
//          {
//            query: { _id: name },
//            update: { $inc: { seq: 1 } },
//            new: true
//          }
//   );

//   return ret.seq;
// }

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-task').post((req, res) => {

  const newTask = new Task({
      // _id: req.params._id,
      taskName: req.body.taskName,
      taskDesc: req.body.taskDesc,
      taskDuration: req.body.taskDuration,
      taskDeadline: req.body.taskDeadline,
      taskCategory: req.body.taskCategory,
      taskPriority: req.body.taskPriority,
      taskStatus: req.body.taskStatus
  });

  newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/task/:id').get((req, res) => {

    Task.findById(req.params.id)
    .then(task => { res.send(task); })
    .catch(err => res.status(400).send(err));
  
  });

  router.route('/get-latest-task').get((req, res) => {
    Task.find().sort({ _id: -1 }).limit(1)
    .then(task => { res.send(task); })
    .catch(err => res.status(400).send(err));
  
  });
  
//   router.route('/task-by-user-id/:user_id').get((req, res) => {

//     Task.find({ 'userId': user_id }, function(err, tasks) {
//         if (err) throw err;
      
//         // 'users' is an array of the User objects retrieved.
        // res.send(tasks);

//         // tasks.forEach(function(task) {
//           // Do something with the password.
//           // The password is stored in user.credentials.password
//         // });
//       });
  
//   });

  router.patch("/update-task/:id", async (req, res) => {
    try {
		const task = await Task.findOne({ _id: req.params.id })

		if (req.body.taskName) {
			task.taskName = req.body.taskName
		}
		if (req.body.taskDesc) {
			task.taskDesc = req.body.taskDesc
		}
        if (req.body.taskDuration) {
			task.taskDuration = req.body.taskDuration
		}
        if (req.body.taskDeadline) {
			task.taskDeadline = req.body.taskDeadline
		}
    if (req.body.taskCategory) {
			task.taskCategory = req.body.taskCategory.toString()
		}
    if (req.body.taskPriority) {
			task.taskPriority = req.body.taskPriority
		}
    if (req.body.taskStatus) {
			task.taskStatus = req.body.taskStatus
		}
		await task.save()
		res.send(task)
	} catch {
		res.status(404)
		res.send({ error: "Task doesn't exist!" })
	}
  });

  router.route('/delete-task/:id').delete((req, res) => {

    Task.findByIdAndRemove(req.params.id)
    .then(() => { res.send('Task deleted'); })
    .catch(err => res.status(400).send(err));
  
  });

module.exports = router;