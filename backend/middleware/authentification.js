const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) =>{
    const token = req.cookies.token;
    

    if(!token) return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded) return res.status(401).json({ message: "Unauthorized - Invalid Token" });

    req.userId = decoded.id;
    next();
}


module.exports = authMiddleware;