let tasks = [
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
      "taskDuration": 1,
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
      "taskCategory": 4,
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


var i, cnt = 0;
let sessions = [];

for (i = 0; i < tasks.length; i++) {
  if((tasks[i].taskCategory == 1) || (tasks[i].taskCategory == 4)){
    //console.log((i + 1));

    tasks.sort(function(a, b){
      var x = a.taskDeadline.toLowerCase();
      var y = b.taskDeadline.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });

    let session = {
        "taskId": tasks[i]._id,
        "sessionDuration": tasks[i].taskDuration,
        "sessionDeadline": 0
    }

    sessions.push(session);
  }

  else{
      //Sort according to the deadline
    tasks.sort(function(a, b){
        var x = a.taskDeadline.toLowerCase();
        var y = b.taskDeadline.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });

      //If deadline are same then consider priority
      if(i < (tasks.length - 1)){
          if(tasks[i].taskDeadline == tasks[i + 1].taskDeadline){
              if(tasks[i].taskPriority < tasks[i + 1].taskPriority){
                [tasks[i], tasks[i + 1]] = [tasks[i + 1], tasks[i]];
              }
          }
      }
//time slicing
     if(tasks[i].taskDuration > 1.5){
          var Q = Math.ceil((tasks[i].taskDuration / 1.5));

          var j;
          for (j = 0; j < (Q - 1); j++){
            
            let session = {
                "taskId": tasks[i]._id,
                "sessionDuration": 1.5,
                "sessionDeadline": 0
            }

            sessions.push(session);
          }

        let session = {
            "taskId": tasks[i]._id,
            "sessionDuration": tasks[i].taskDuration - ((Q - 1)* 1.5),
            "sessionDeadline": 0
        }

        sessions.push(session);


          //console.log(tasks[i].taskDuration);
          //console.log(Q);
     }

     else{
      let session = {
        "taskId": tasks[i]._id,
        "sessionDuration": tasks[i].taskDuration,
        "sessionDeadline": 0
      }
      sessions.push(session);
     }
     
  }
  //console.log(tasks[i].taskDeadline);
  //console.log(tasks[i].taskPriority);
}


var start_time = 8;
var end_time = 22;
var time_t = start_time;

for (i = 0; i < sessions.length; i++){
    
if(time_t < end_time){
  time_t = time_t + sessions[i].sessionDuration;
  sessions[i].sessionDeadline = time_t;
}

else{
  
}
    /*sessions.sort(function(a, b){
        var x = a.sessionDeadline.toLowerCase();
        var y = b.sessionDeadline.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });*/

      console.log(sessions[i]);
}

//console.log(tasks.length);