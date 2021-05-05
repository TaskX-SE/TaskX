/**
 * @author Harsh Mange
 * @email harshmange44@gmail.com
 * @create date 2021-04-01 01:09:47
 * @modify date 2021-05-05 20:03:23
 * @desc functions to perform GET, POST, PATCH & DELETE on the task schema
 */

const axios = require('axios').default;

let task = {};
let tasks = [];
var newTaskDetails = { 
    taskName: "algo",
    taskDesc: "code",
    taskDuration: 60,
    taskDeadline: "01-04-2021 15:00",
    taskCategory: 2,
    taskPriority: 2,
    taskStatus: 1
 };

 var updatedTaskDetails = { 
    taskName: "frontend",
    taskDesc: "coding",
    taskDuration: 120,
    taskDeadline: "03-04-2021 12:00",
    taskPriority: 1,
    taskStatus: 0
 };

async function getTasks() {
    try {
      const response = await axios.get(
        'http://localhost:5000/tasks/',
        {
        method: 'get',
        headers: {
              'Content-Type': 'application/json'
            }
      })
      return response.data;
  

    } catch (error) {
      console.error(error);
    }
  }

getTasks().then(result => {
  tasks = result;
  console.log(tasks);
})

async function getTaskById(id) {
  try {
    const response = await axios.get(
      'http://localhost:5000/tasks/task/'+id,
      {
      method: 'get',
      headers: {
            'Content-Type': 'application/json'
          }
    })
    return response.data;

  } catch (error) {
    console.error(error);
  }
}

// getTaskById("605b756ef70310413071ff84").then(result => {
//   task = result;
//   console.log(task);
// })

async function createTask(newTask) {

  try{
  let res = await axios.post('http://localhost:5000/tasks/add-task', newTask);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// createTask(newTaskDetails).then(response => {
//   // console.log(response);
// });

async function updateTask(id,taskDetails) {

  try{
  let res = await axios.patch('http://localhost:5000/tasks/update-task/'+id, taskDetails);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// updateTask("6064e2a17a22ec169433a2b8",updatedTaskDetails).then(response => {
//   // console.log(response);
// });

async function deleteTask(id) {

  try{
  let res = await axios.delete('http://localhost:5000/tasks/delete-task/'+id);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// deleteTask("6064e2a17a22ec169433a2b8").then(response => {
//   // console.log(response);
// });