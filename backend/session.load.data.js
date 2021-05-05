/**
 * @author Harsh Mange
 * @email harshmange44@gmail.com
 * @create date 2021-04-01 02:10:55
 * @modify date 2021-05-05 21:22:55
 * @desc functions to perform GET, POST, PATCH & DELETE on the session schema
 */
 var mongoose = require('mongoose');
 var newId = new mongoose.Types.ObjectId("56cb91bdc3464f14678934ca");
 const axios = require('axios').default;

let session = {};
let sessions = [];
var newSessionDetails = {
  taskId: newId,
  taskName: "s1",
    sessionDuration: 60,
    sessionDeadline: "01-04-2021 15:00"
 };

 var updatedSessionDetails = { 
    sessionDuration: 90,
    sessionDeadline: "02-04-2021 15:00"
 };

async function getSessions() {
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

async function getSessionById(id) {
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

async function createSession(newSession) {

  try{
  let res = await axios.post('http://localhost:5000/sessions/add-session', newSession);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

createSession(newSessionDetails).then(response => {
  // console.log(response);
});

async function updateSession(id,sessionDetails) {

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

async function deleteSession(id) {

  try{
  let res = await axios.delete('http://localhost:5000/sessions/delete-session/'+id);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// deleteSession("6064e2a17a22ec169433a2b8").then(response => {
//   // console.log(response);
// });