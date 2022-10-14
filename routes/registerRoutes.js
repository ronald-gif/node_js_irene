const express = require('express');
const router = express.Router();

// import model
const Registration = require('../models/user')

// creating routers
router.get('/register', (req, res) =>{
    res.render('registeration')
});

router.post('/register', async (req, res) =>{
    console.log(req.body);
    try {
        const user = new Registration(req.body);
        await Registration.register(user, req.body.password, (error) => {
            if(error){
                throw error
            }
            res.redirect('/register')
        })
    } catch (error) {
        res.status(400).send('sorry we atr fixing something');
        console.log(error);
    }
   
});




module.exports = router;