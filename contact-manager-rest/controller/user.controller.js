const db = require('../knexfile');
const knex = require('knex')(db);
const router  = require('express').Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', (req,res)=>{
    postUsername = req.body.username;
    postPassword = req.body.password;
    postConfirmpassword = req.body.confirmPassword;  
     
        if(postConfirmpassword === postPassword){
            bcrypt.hash(req.body.password,saltRounds,(err,hash) =>{
                if(err){
                    console.log(err);
                    res.status(500).json({error:err});
                }else{
                    knex('users').insert([
                    {username: postUsername, password :hash},                
                    ]).then((result)=>{
                    res.json({ success: true, message: 'ok'})
                    })
                }
            })
        }else{
            res.json({success: false,message:'please confirm your password'});
        }
});
module.exports = router;