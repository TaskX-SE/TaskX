function getMiliseconds(hrs,min,sec)
{
    return((hrs*60*60+min*60+sec)*1000);
}

var tasks = [
    {
      "taskPriority": 5,
      "taskStatus": 0,
      "_id": "605b754da13b2158e88e7580",
      "taskName": "schema",
      "taskDesc": "schema creating...",
      "taskDuration": 2,
      "taskDeadline": "2020-11-18T17:27:38.000Z",
      "taskCategory": 1,
      "__v": 0
    },
    
    {
      "taskPriority": 5,
      "taskStatus": 0,
      "_id": "605b75c9f70310413071ff85",
      "taskName": "meeting",
      "taskDesc": " creating...",
      "taskDuration": 2,
      "taskDeadline": "2020-11-18T12:27:38.000Z",
      "taskCategory": 1,
      "__v": 0
    },

    {
      "taskPriority": 5,
      "taskStatus": 0,
      "_id": "605b756ef70310413071ff84",
      "taskName": "schema",
      "taskDesc": "schema creating...",
      "taskDuration": 1.5,
      "taskDeadline": "2020-11-18T10:27:38.000Z",
      "taskCategory": 1,
      "__v": 0
    },

    
    
    {
      "taskPriority": 5,
      "taskStatus": 0,
      "_id": "605b9ae5282955428c892784",
      "taskName": "mad",
      "taskDesc": " creating...",
      "taskDuration": 4.5,
      "taskDeadline": "2020-11-18T22:27:38.000Z",
      "taskCategory": 2,
      "__v": 0
    },

   /* {
    "taskPriority": 3,
    "taskStatus": 0,
    "_id": "605b9ae5282955428c892784",
    "taskName": "mad",
    "taskDesc": " creating...",
    "taskDuration": 1.5,
    "taskDeadline": "2020-11-18T22:27:38.000Z",
    "taskCategory": 2,
    "__v": 0
    },

    {
      "taskPriority": 1,
      "taskStatus": 0,
      "_id": "605c23d2db3f7b3174830f2d",
      "taskName": "mad",
      "taskDesc": " creating...",
      "taskDuration": 15,
      "taskDeadline": "2020-11-18T17:27:38.000Z",
      "taskCategory": 1,
      "__v": 0
    }*/
];

function schedule(taskArr){
var i, cnt = 0;
let sessions = [];

for (i = 0; i < taskArr.length; i++) {
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
        "taskId": taskArr[i]._id,
        "sessionDuration": taskArr[i].taskDuration,
        "sessionDeadline": new Date()
    }

    sessions.push(session);
  }

  else{
      //Sort according to the deadline
    taskArr.sort(function(a, b){
        var x = a.taskDeadline.toLowerCase();
        var y = b.taskDeadline.toLowerCase();
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
                "taskId": taskArr[i]._id,
                "sessionDuration": 1.5,
                "sessionDeadline": new Date()
            }

            sessions.push(session);
          }

           session = {
            "taskId": taskArr[i]._id,
            "sessionDuration": taskArr[i].taskDuration - ((Q - 1)* 1.5),
            "sessionDeadline": new Date()
        }

        sessions.push(session);


          //console.log(taskArr[i].taskDuration);
          //console.log(Q);
     }

     else{
       session = {
        "taskId": taskArr[i]._id,
        "sessionDuration": taskArr[i].taskDuration,
        "sessionDeadline": new Date()
      }
      sessions.push(session);
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
for (i = 0; i < sessions.length; i++){
    
if(curr_date_time.getTime() + getMiliseconds(sessions[i].sessionDuration,0,0) < end_date_time.getTime()){
  curr_date_time.setTime(curr_date_time.getTime() + getMiliseconds(sessions[i].sessionDuration,0,0));
  // curr_date_time.getTime() = curr_date_time.getTime() + sessions[i].sessionDuration;
  sessions[i].sessionDeadline = new Date(curr_date_time);
  // console.log(curr_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
}

else{
  start_date_time.setTime(start_date_time.getTime() + getMiliseconds(24,0,0));
  curr_date_time.setTime(start_date_time.getTime());
  end_date_time.setTime(end_date_time.getTime() + getMiliseconds(24,0,0));
  // console.log(curr_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
  // console.log(end_date_time.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));

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

schedule(tasks).forEach(element => {
  console.log(element.sessionDuration);
console.log(element.sessionDeadline.toLocaleString('en-US', {timeZone: "Asia/Kolkata"}));
});

//console.log(taskArr.length);