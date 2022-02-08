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
            knex('users').count('id as count').where({username : postUsername,password : postPassword})
            .then((result) => {
            rowCount = result[0].count;
            if(rowCount === 1){ 
                const token = jwt.sign({count: rowCount},secretKey,{expiresIn: "2h"});
                res.json({data: token, success: true, message: 'Ok for login',status:200})
            }else{
                res.json({data: rowCount, success: true, message: 'Not Ok for login',status:200})
            }
    });
          }
    });

    
});

module.exports = router;