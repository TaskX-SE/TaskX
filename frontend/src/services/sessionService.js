 const axios = require('axios').default;

export async function getSessions() {
    try {
      const response = await axios.get(
        'http://localhost:5000/sessions/',
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

// getSessions().then(result => {
//   sessions = result;
//   console.log(sessions);
// })

 export async function getSessionByTaskId(taskId) {
  try {
    const response = await axios.get(
      'http://localhost:5000/sessions/session-by-task-id/'+taskId.toString(),
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

//  getSessionByTaskId("605c2efdd024f34974d3208f").then(result => {
// //   session = result;
//   console.log(result);
// })

export async function deleteSessionsByTaskId(taskId) {
    try {
      const response = await axios.delete(
        'http://localhost:5000/sessions/delete-multiple-sessions/'+taskId)
      return response.data;
  
    } catch (error) {
      console.error(error);
    }
  }

export async function getSessionById(id) {
  try {
    const response = await axios.get(
      'http://localhost:5000/sessions/session/'+id,
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

// getSessionById("605b756ef70310413071ff84").then(result => {
//   session = result;
//   console.log(session);
// })

export async function createSession(newSession) {

  try{
  let res = await axios.post('http://localhost:5000/sessions/add-session', newSession);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// createSession(newSessionDetails).then(response => {
  // console.log(response);
// });

export async function updateSession(id,sessionDetails) {

  try{
  let res = await axios.patch('http://localhost:5000/sessions/update-session/'+id, sessionDetails);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// updateSession("6064e2a17a22ec169433a2b8",updatedSessionDetails).then(response => {
//   // console.log(response);
// });

export async function deleteSession(id) {

  try{
  let res = await axios.delete('http://localhost:5000/sessions/delete-session/'+id);

  return res.data;

  } catch (error){
    console.error(error);
  }
}


export async function deleteSessionByTaskId(id) {

    try{
    let res = await axios.delete('http://localhost:5000/sessions/delete-session-by-task-id/'+id);
  
    return res.data;
  
    } catch (error){
      console.error(error);
    }
  }

// deleteSession("6064e2a17a22ec169433a2b8").then(response => {
//   // console.log(response);
// });