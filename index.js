// Dependencies
const express = require('express');

// instantiations
const app = express();

// configurations

// middleware


// routes
// req stands for request and res stands for ressponse
// setting up a route
// app.method(path, handler)
// methods: get, post, delete, put(edit, update)
app.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

app.get('/about', (req, res) => { // new
    res.send('About us page.');
  });

//   bootstraping server
app.listen(4000, () => console.log('listening on port 4000'));