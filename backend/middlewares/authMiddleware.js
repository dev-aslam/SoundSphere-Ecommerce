import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const protect = async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (err) {
      res.status(401).json("Not Authorized, Invalid Token");
    }
  } else {
    res.status(401).json("Not Authorized, No token");
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user?.isAdmin) {
    next();
  }
  res.status(403).json("Not Authorized, no permission");
};

export { protect, isAdmin };
