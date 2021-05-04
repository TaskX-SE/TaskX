const path = require('path')
const express= require('express')
const mongoose = require('mongoose');
const dotenv=require('dotenv')
const connectDB = require('./config/db')
const morgan = require('morgan')
const flash = require('connect-flash');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

//Load Config File
dotenv.config({path: './config/config.env'})
//Passport Config
require('./config/passport')(passport)

connectDB()
const app = express()

const VIEWS = path.join(__dirname, 'views');
app.set('views', VIEWS);
app.set('view engine', 'ejs');

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

//Static Folder
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


const PORT = 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} amde on port ${PORT}`))