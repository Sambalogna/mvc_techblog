const router =  require('express').Router();
//inser models into const below
//const {} = require('../models');

router.get('/', async (req, res)=> {
    try{
        res.render('homepage' )
    }
    catch(err){
        res.status(500).json(err);
    }
});