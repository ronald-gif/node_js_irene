// Dependencies
const express = require('express');

// instantiations
const app = express();

// configurations

// middleware

// Simple request time logger
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());

  // This function call tells that more processing is
  // required for the current request and is in the next middleware
  // function/route handler.
  next();  
});

app.use('/about', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});


// To parse URL encoded data
app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));

// routes
// req stands for request and res stands for ressponse
// setting up a route
// app.method(path, handler)
// methods: get, post, delete, put(edit, update)

app.get('/home', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

app.get('/about', (req, res) => { // new
    res.send('About us page.');
  });

  app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
  });

// path parameters
app.get('/books/:name', (req, res) => {
  res.send('hello ' + req.params.name);
});

  // query params
  // app.get('/users', (req, res) => {
  //   res.send(
  //     'my query params are: ' + req.query.class + ' and ' + req.query.cohort
  //   );
  // });

  app.get('/users', (req, res) => {
    console.log(req.query)
    res.send(
      'my query params are: ' + req.query.class + ' and ' + req.query.cohort
    );
  });

 //put request
app.put("/about", (req, res) => {
  res.send("You have changed me");
});

app.post("/register", (req, res) => {
  res.send("You have registered a user");
});

app.delete("/about", (req, res) => {
  res.send("You have deleted something");
});


// sending files
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/sign", (req, res) => {
  res.sendFile(__dirname + "/sign.html");
});

app.post("/sign", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});


  // For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

//   bootstraping server
app.listen(4000, () => console.log('listening on port 4000'));