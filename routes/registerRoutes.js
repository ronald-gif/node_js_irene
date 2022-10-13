const express = require('express');
const router = express.Router();

// creating routers
router.get('/register', (req, res) =>{
    res.render('registeration')
});

router.post('/register', (req, res) =>{
    console.log(req.body);
    res.send('registration successfull')
})


module.exports = router;