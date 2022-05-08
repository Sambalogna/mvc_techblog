
const router =  require('express').Router();
//inser models into const below
//const {} = require('../models');

router.get('/',(req, res)=> {
        res.render('homepage')
});

router.get('/login', (req, res)=> {
    // if(req.session.loggedIn){
    //
    // }
    res.render('login');
})

module.exports = router;