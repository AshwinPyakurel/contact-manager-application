const authenticate = require("../middleware/authenticate.js");

const router =  require("express").Router();

router.use('/login', require('../controller/login.controller.js'));
router.use('/register', require('../controller/user.controller.js'));
router.use('/contacts',require('../controller/contacts.controller.js'));

module.exports = router;