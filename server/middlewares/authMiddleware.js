const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
 const token = req.header("Authorization");
 console.log(token);
 
  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log(decoded);
    
    req.user = decoded._id;
    next();
  } catch (err) {
    res.status(200).json({ message: "token is not valid" });
  }
};

module.exports = authMiddleware;