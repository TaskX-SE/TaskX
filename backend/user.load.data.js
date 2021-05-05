/**
 * @author Harsh Mange
 * @email harshmange44@gmail.com
 * @create date 2021-04-01 00:19:16
 * @modify date 2021-04-19 11:58:37
 * @desc functions to perform GET, POST, PATCH & DELETE on the user schema
 */

const axios = require('axios').default;

let user = {};
let users = [];
var newUserDetails = { 
  name: 'Samarth',
  email: 'samarth.s@ahduni.edu.in',
  password: 'samarths',
  gender: 'male',
  phone_no: 2345678901,
  university: 'AU'
 };

 var updatedUserDetails = { 
  name: 'dhruv',
  password: 'dhruvs',
  gender: 'male',
  phone_no: 2345678902,
  university: 'AU'
 };

async function getUsers() {
    try {
      const response = await axios.get(
        'http://localhost:5000/users/',
        {
        method: 'get',
        headers: {
              'Content-Type': 'application/json'
            }
      })
      // console.log(response.data[0].name);
      return response.data;
      //  users = response.data;

      // data.forEach(element => {
      //   users.push(element)
      // });

      // console.log(users);

    } catch (error) {
      console.error(error);
    }
  }

getUsers().then(result => {
  users = result;
  console.log(users);
})

async function getUserById(id) {
  try {
    const response = await axios.get(
      'http://localhost:5000/users/user/'+id,
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

// getUserById("6064d94b2a55d405689cf222").then(result => {
//   user = result;
//   console.log(user);
// })

async function createUser(newUser) {

  try{
  let res = await axios.post('http://localhost:5000/users/add-user', newUser);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// createUser(newUserDetails).then(response => {
//   // console.log(response);
// });

async function updateUser(id,userDetails) {

  try{
  let res = await axios.patch('http://localhost:5000/users/update-user/'+id, userDetails);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// updateUser("6064d99ae9e0ee3de408c3ae",updatedUserDetails).then(response => {
//   // console.log(response);
// });

async function deleteUser(id) {

  try{
  let res = await axios.delete('http://localhost:5000/users/delete-user/'+id);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

// deleteUser("6064d9592a55d405689cf223").then(response => {
//   // console.log(response);
// });