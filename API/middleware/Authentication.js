const jwt = require('jsonwebtoken');

//verifying if a token is valid

module.exports = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWTKEY)
        req.userData = decoded
        next();
    }catch(error){
        return res.status(401).json({
            message: "Cannot Access Without Authentication Please Log In"
        });
    }

};