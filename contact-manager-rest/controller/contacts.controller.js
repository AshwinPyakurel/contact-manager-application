const router  = require('express').Router();
const  uploadImage = require('../helpers/imageUpload');
const db = require('../knexfile');
const knex = require('knex')(db);
const authenticate = require('../middleware/authenticate')
router.get('/',authenticate,(req,res,)=>{
    knex('contacts').select('*').then((result)=>{               
        res.json({data:result,status:200,message:"OK"})
    });
});
router.get('/hello',(req,res,)=>{
    res.json({status:200,message:"hello"})
});
router.post('/',authenticate,(req,res)=>{
    console.log('hello');
    console.log(req.body);
    postName = req.body.name;
    postPhoneNumber = req.body.phone_number;
    postEmail = req.body.email;
    postUserId = 4;
    postImageUrl = req.body.image;      
    
    // uploadImage(postImageUrl);
    knex('contacts').insert([
        {name:postName,phone_number:postPhoneNumber,email:postEmail,user_id:postUserId,image:postImageUrl}
    ]).then((result)=>{
        res.json({status:200,message:'OK'});
    })
});

router.put('/:id',authenticate,(req,res)=>{
    const {id} = req.params;
    console.log(id);
    postName = req.body.name;
    postPhoneNumber = req.body.phone_number;
    postEmail = req.body.email; 
    postUserId = 4;
    postImageUrl = req.body.image;    
    knex('contacts').where({id:id})
    .update([
        {name:postName,phone_number:postPhoneNumber,email:postEmail,user_id:postUserId,image:postImageUrl}
    ])
    .then((result)=>{
        res.json({status:200,message:"ok"})
    })
});

router.delete('/:id',authenticate,(req,res)=>{
    const {id} = req.params;
    knex('contacts').where({id:id}).del().then((result=>{
        res.json({status:200,message:"ok"})
    }))
})
module.exports = router;