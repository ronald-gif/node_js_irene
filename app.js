// Dependencies
const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const config = require('./config/db')
const passport = require('passport')


//express sesssion
const expressSession = require('express-session')({
    secret: 'secretRonald',
    resave: false,
    saveUninitialized: false, 
});


// importing route file
const registrationRoutes = require('./routes/registerRoutes')

// instantiations
const app = express();

// Set up database connection
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});


// configurations
// app.enginine(require,)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
// app.set('views', './views')


// middleware
app.use(express.static(path.join(__dirname, 'public')));
// for uoloaded images
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
app.use(expressSession)

// passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());



// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

// routes
// req stands for request and res stands for ressponse
// setting up a route
// app.method(path, handler)
// methods: get, post, delete, put(edit, update)

app.use('/user', registrationRoutes)


  // For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

//   bootstraping server
app.listen(5000, () => console.log('listening on port 5000'));