
const router =  require('express').Router();
const {User, Comment, Blog} = require('../models');


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