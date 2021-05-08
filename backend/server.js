// const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const path = require('path');
const express= require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');
// const session
const MongoStore = require('connect-mongo')(session);

//Load Config File
dotenv.config({path: './config/config.env'})
//Passport Config
require('./config/passport')(passport)

require('dotenv').config();
connectDB()

const app = express();


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Logging
if(process.env.NODE_ENV === 'development')
{
  app.use(morgan('dev'))
}
// Connect flash
app.use(flash());


//Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
)

//Passports Middleware
app.use(passport.initialize())
app.use(passport.session())


const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const sessionsRouter = require('./routes/sessions');
const tagsRouter = require('./routes/tags');
const feedbacksRouter = require('./routes/feedback');

//Routes
// app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);
app.use('/sessions', sessionsRouter);
app.use('/tags', tagsRouter);
app.use('/feedbacks', feedbacksRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});