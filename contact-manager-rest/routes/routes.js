const authenticate = require("../middleware/authenticate.js");

const router =  require("express").Router();

router.use('/login', require('../controller/login.controller.js'));
router.use('/register', require('../controller/user.controller.js'));
router.use('/contacts',require('../controller/contacts.controller.js'));
router.get('/logout',authenticate,(req,res)=>{    
    res.clearCookie('auth',{domain: 'localhost', path: '/'});
    res.json({status:200,message: "ready for logout"}); 
    res.end();
})
module.exports = router;