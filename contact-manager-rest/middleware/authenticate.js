const jwt = require('jsonwebtoken');
const secretKey= "THis is my secret key";

const authenticate =  (req,res,next) => {
    
    let token;    
    if (req.cookies.auth){
        token = req.cookies.auth;
    }
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    else{
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) throw err;
            next();
          });
    }
};
module.exports = authenticate;