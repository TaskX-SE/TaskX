var nodemailer = require('nodemailer');

module.exports.welcome = function(name, mail) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'noreply.taskx@gmail.com',
            pass: 'taskx123'
        }
    });

    var mailOptions = {
        from: 'noreply.taskx@gmail.com',
        to: mail,
        subject: 'Welcome to TaskX',
        html: '<h1 style="color:blue">Welcome</h1><p>' + name + 'To taskX!</p>'

    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
};

module.exports.upcomingTask = function(name, mail, taskname, due_date) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'noreply.taskx@gmail.com',
            pass: 'taskx123'
        }
    });

    var mailOptions = {
        from: 'noreply.taskx@gmail.com',
        to: mail,
        subject: 'Task : ' + taskname,
        html: '<h1 style="color:blue">' + taskname + ' due </h1><p>' + name + ' your task is due till ' +
            due_date + '</p>'

    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
};

module.exports.meetingTask = function(name, mail, taskname, due_date, link) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'noreply.taskx@gmail.com',
            pass: 'taskx123'
        }
    });

    var mailOptions = {
        from: 'noreply.taskx@gmail.com',
        to: mail,
        subject: 'Task : ' + taskname,
        html: '<h1 style="color:blue">' + taskname + ' due </h1><h3>' + name + ' your task is due till ' +
            due_date + '</h3><p>link for meeting is ' + link + '</p>'

    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
};