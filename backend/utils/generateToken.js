const jwt = require('jsonwebtoken');
const generateToken = (username, id) => {
    const token =  jwt.sign({username, id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
    return token;
}

module.exports = generateToken;