const jwt = require('jsonwebtoken');
const { apiResponse } = require('../config/utils');

const jwtKey = process.env.JWT_KEY;

exports.verifyTokenOptional = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if (!err) {
                req.user = decoded;
            }
        });
    }

    next();
};

exports.verifyTokenRequired = (req, res, next) => {
    const token = req.headers['authorization'];

    if(token){
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err){
                apiResponse(res, 403, 'accès interdit : token invalide');
            }
            else{
                req.user = decoded;
                
                next();
            }
        });
    }
    else{
        apiResponse(res, 401, 'accès interdit : token manquant');
    }
}

// const bcrypt = require('bcrypt');

// async function hashPassword(password) {
//   try {
//     const saltRounds = 10; 
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     return hashedPassword;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }

// hashPassword('mon mot de passe').then(hashed => {
//   console.log(hashed); 
// });