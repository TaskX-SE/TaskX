const axios = require('axios').default;

export const getPriority = () => ([
    { id: '-1', title: 'Default' },
    { id: '0', title: 'Low' },
    { id: '1', title: 'Medium' },
    { id: '2', title: 'High' },
])

let tasks = []

 export async function getTasks() {
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

  export function fetchTasks(){
      getTasks().then(result => {
          tasks = result
          
          return tasks;
      })
      .catch(error =>{
          console.log(error)
      })
  }
// getTasks().then(result => {
// //   tasks = result;
//   console.log(result);
// })

export async function getTaskById(id) {
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

export async function getLatestTask() {
  try {
    const response = await axios.get(
      'http://localhost:5000/tasks/get-latest-task/',
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

export function insertTask(taskDetails){
    createTask(taskDetails).then(result => {
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })
}
// createTask(newTaskDetails).then(response => {
//   // console.log(response);
// });

 export async function updateTaskById(id,taskDetails) {

  try{
  let res = await axios.patch('http://localhost:5000/tasks/update-task/'+id, taskDetails);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

export function updateTask(newTaskDetails){
    updateTaskById(newTaskDetails._id, newTaskDetails).then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error);
    })
}
// updateTaskById("6064e2a17a22ec169433a2b8",updatedTaskDetails).then(response => {
//   // console.log(response);
// });

export async function deleteTask(id) {

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