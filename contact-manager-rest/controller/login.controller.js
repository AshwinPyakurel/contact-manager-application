const router  = require('express').Router();
const db = require('../knexfile');
const knex = require('knex')(db);
const bcrypt = require('bcrypt');
const saltRounds = 10;
const secretKey = "THis is my secret key";
const jwt = require('jsonwebtoken');

router.post('/',(req,res) =>{
    postUsername = req.body.username;
    postPassword = req.body.password;  
    
    bcrypt.hash(postPassword,saltRounds,(err,hash) =>{
        if (err){
            console.log(err);
            res.status(500).json({error:err});
          }else{
            knex('users').select('username','password').where({username : postUsername,password : postPassword})
            .then((result) => {     
                console.log(result.length);           
                if(result.length !== 0){
                    username = result[0].username;
                    password = result[0].password;            
                    const token = jwt.sign({username:username},secretKey,{expiresIn: "2h"});
                    res.cookie('auth',token);                
                    res.json({data: token, success: true, message: 'Ok for login',status:200})
                }else{
                    res.json({data:0,status:404,message:"User not found"});
                }
            
            });
          }
    }); 
});


module.exports = router;