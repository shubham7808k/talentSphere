const express = require('express');

const router = express.Router();

router.get('/add',(req,res)=>{
    res.send('user responde from add')
});

//getall
router.get('/getall',(req,res)=>{
    res.send('user responde from getall')
});
//getbyid
router.get('/getall',(req,res)=>{
    res.send('user responde from getall')
});
//delete
router.get('/delete',(req,res)=>{
    res.send('user responde from delete')
});
//update
router.get('/update',(req,res)=>{
    res.send('user responde from update')
});

module.exports = router;