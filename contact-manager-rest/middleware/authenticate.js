const jwt = require('jsonwebtoken');
const secretKey= "THis is my secret key";

const authenticate =  (req,res,next) => {
    let token;
    if (req.headers.authorization){
        token = req.headers.authorization;
    }
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    else{
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) throw err;
            next();
          });
    }
};

module.exports = authenticate;