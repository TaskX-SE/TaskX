const axios = require('axios').default;

async function createSession(newSession) {

  try{
  let res = await axios.post('http://localhost:5000/sessions/add-session', newSession);

  return res.data;

  } catch (error){
    console.error(error);
  }
}

export function getMiliseconds(hrs,min,sec)
{
    return((hrs*60*60+min*60+sec)*1000);
}
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  // hours = (hours < 10) ? hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours;
}

// var tasks = [
//   {
//     taskPriority: -1,
//     taskStatus: 0,
//     _id: '605b754da13b2158e88e7580',
//     taskName: 'schema',
//     taskDesc: 'schema creating...',
//     taskDuration: 30,
//     taskDeadline: '2020-11-28T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   },
//   {
//     taskPriority: -1,
//     taskStatus: 0,
//     _id: '605b756ef70310413071ff84',
//     taskName: 'schema',
//     taskDesc: 'schema creating...',
//     taskDuration: 30,
//     taskDeadline: '2020-11-28T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   },
//   {
//     taskPriority: -1,
//     taskStatus: 0,
//     _id: '605b75c9f70310413071ff85',
//     taskName: 'mad',
//     taskDesc: ' creating...',
//     taskDuration: 15,
//     taskDeadline: '2020-11-18T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   },
//   {
//     taskPriority: -1,
//     taskStatus: 0,
//     _id: '605b9ae5282955428c892784',
//     taskName: 'mad',
//     taskDesc: ' creating...',
//     taskDuration: 15,
//     taskDeadline: '2020-11-18T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   },
//   {
//     taskPriority: 1,
//     taskStatus: 0,
//     _id: '605c233ddb3f7b3174830f2c',
//     taskName: 'mad',
//     taskDesc: ' creating...',
//     taskDuration: 15,
//     taskDeadline: '2020-11-18T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   },
//   {
//     taskPriority: 1,
//     taskStatus: 0,
//     _id: '605c23d2db3f7b3174830f2d',
//     taskName: 'mad',
//     taskDesc: ' creating...',
//     taskDuration: 15,
//     taskDeadline: '2020-11-18T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   },
//   {
//     taskPriority: 1,
//     taskStatus: 1,
//     _id: '605c2ec6d024f34974d3208e',
//     taskName: 'status',
//     taskDesc: ' creating...',
//     taskDuration: 15,
//     taskDeadline: '2020-11-18T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   },
//   {
//     taskPriority: 1,
//     taskStatus: 0,
//     _id: '605c2efdd024f34974d3208f',
//     taskName: 'status',
//     taskDesc: ' creating...',
//     taskDuration: 15,
//     taskDeadline: '2020-11-18T17:27:38.000Z',
//     taskCategory: 1,
//     __v: 0
//   }
// ];

export default function schedule(taskArr){
var i, cnt = 0;
let sessions = [];
console.log("taskArr..."+taskArr)
for (i = 0; i < taskArr.length; i++) {

  if(taskArr[i].taskStatus == 0){
  if((taskArr[i].taskCategory == 1) || (taskArr[i].taskCategory == 4)){
    //console.log((i + 1));

    taskArr.sort(function(a, b){
      var x = a.taskDeadline.toLowerCase();
      var y = b.taskDeadline.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });

      var session = {
        "taskId": (taskArr[i].toString()),
        "taskName": taskArr[i].taskName,
        "sessionDuration": taskArr[i].taskDuration,
        "sessionStartTime": new Date(),
        "sessionDeadline": new Date()
    }

    sessions.push(session);
  }

  else{
      //Sort according to the deadline
    taskArr.sort(function(a, b){
        var x = new Date(a.taskDeadline);
        var y = new Date(b.taskDeadline);
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      //If deadline are same then consider priority
      if(i < (taskArr.length - 1)){
          if(taskArr[i].taskDeadline == taskArr[i + 1].taskDeadline){
              if(taskArr[i].taskPriority < taskArr[i + 1].taskPriority){
                [taskArr[i], taskArr[i + 1]] = [taskArr[i + 1], taskArr[i]];
              }
          }
      }
//time slicing
     if(taskArr[i].taskDuration > 1.5){
          var Q = Math.ceil((taskArr[i].taskDuration / 1.5));

          var j;
          for (j = 0; j < (Q - 1); j++){
            
              session = {
                "taskId": (taskArr[i]._id),
                "taskName": taskArr[i].taskName,
                "sessionDuration": 1.5,
                "sessionStartTime": new Date(),
                "sessionDeadline": new Date()
            }

            sessions.push(session);
          }

           session = {
            "taskId": (taskArr[i]._id),
            "taskName": taskArr[i].taskName,
            "sessionDuration": taskArr[i].taskDuration - ((Q - 1)* 1.5),
            "sessionStartTime": new Date(),
            "sessionDeadline": new Date()
        }

        sessions.push(session);


          //console.log(taskArr[i].taskDuration);
          //console.log(Q);
     }

     else{
       session = {
        "taskId": (taskArr[i]._id),
        "taskName": taskArr[i].taskName,
        "sessionDuration": taskArr[i].taskDuration,
        "sessionStartTime": new Date(),
        "sessionDeadline": new Date()
      }
      sessions.push(session);
     }
     
  }
}
  //console.log(taskArr[i].taskDeadline);
  //console.log(taskArr[i].taskPriority);
  }


var start_time = 8;
var end_time = 20;

var start_date_time = new Date();
var end_date_time = new Date();

start_date_time.setHours(start_time);
start_date_time.setMinutes(0);
start_date_time.setSeconds(0);
end_date_time.setHours(end_time);
end_date_time.setMinutes(0);
end_date_time.setSeconds(0);

// console.log(start_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
// console.log(start_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
let curr_date_time;
if(new Date().getTime() < start_date_time.getTime()){
  curr_date_time = new Date(start_date_time);
}else if(new Date().getTime() > end_date_time.getTime()){
  curr_date_time = new Date(start_date_time)
  curr_date_time.setTime(curr_date_time.getTime() + getMiliseconds(24,0,0));
}else{
  curr_date_time = new Date((new Date()).getTime() + getMiliseconds(0,2,0));
  curr_date_time.setSeconds(0);
}

let total_sessions = sessions.length;

for (i = 0; i < total_sessions; i++){
    
if(curr_date_time.getTime() + getMiliseconds(sessions[i].sessionDuration,0,0) < end_date_time.getTime()){

  curr_date_time.setTime(curr_date_time.getTime() + getMiliseconds(0,15,0))
  sessions[i].sessionStartTime = new Date(curr_date_time);
  curr_date_time.setTime(curr_date_time.getTime() + getMiliseconds(sessions[i].sessionDuration,0,0));
  // curr_date_time.getTime() = curr_date_time.getTime() + sessions[i].sessionDuration;
  sessions[i].sessionDeadline = new Date(curr_date_time);
  // console.log(curr_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
}
else if(end_date_time.getTime() - curr_date_time.getTime() >= getMiliseconds(0,30,0)){
  let durationTemp = (Math.abs(end_date_time.getTime() - curr_date_time.getTime()) / (1000 * 60 * 60)) % 24;
  // console.log("durationTemp: "+durationTemp)
  if(durationTemp>=1.25){
    durationTemp = 1.25
  }else if(durationTemp>=1){
    durationTemp = 1
  }else if(durationTemp>=0.75){
    durationTemp = 0.75
  }else{
    durationTemp = 0.5
  }
  var session1 = {
    "taskId": (sessions[i].taskId),
    "taskName": sessions[i].taskName,
    "sessionDuration": durationTemp,
    "sessionStartTime": new Date(curr_date_time),
    "sessionDeadline": new Date(curr_date_time.getTime() + getMiliseconds(durationTemp,0,0))
  }

  curr_date_time.setTime(curr_date_time.getTime() + getMiliseconds(durationTemp,0,0));

  // sessions[i].sessionDuration -= durationTemp

  sessions.splice(i, 0, session1);
  total_sessions++;
  // sessions.push(session1)
}
else{
  start_date_time.setTime(start_date_time.getTime() + getMiliseconds(24,0,0));
  curr_date_time.setTime(start_date_time.getTime());
  end_date_time.setTime(end_date_time.getTime() + getMiliseconds(24,0,0));
  // console.log(curr_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
  // console.log(end_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));

  sessions[i].sessionStartTime = new Date(curr_date_time);
  curr_date_time.setTime(curr_date_time.getTime() + getMiliseconds(sessions[i].sessionDuration,0,0));
  sessions[i].sessionDeadline = new Date(curr_date_time);
}
    /*sessions.sort(function(a, b){
        var x = a.sessionDeadline.toLowerCase();
        var y = b.sessionDeadline.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });*/
}
return sessions;
}

// for(let i = 0; i<tasks.length; i++){
//   console.log(tasks[i].taskDeadline.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
// }

// schedule(tasks).forEach(element => {

//   createSession(element)

//   console.log(element);
// // console.log(element.sessionDeadline.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
// });

//console.log(taskArr.length);