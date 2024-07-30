import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const protect = async (req, res, next) => {
  let token = req.cookies.jwtAdmin;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(decoded.user).select("-password");
      next();
    } catch (err) {
      res.status(401).json("Not Authorized, Invalid Token");
    }
  } else {
    res.status(401).json("Not Authorized, No token");
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user && req.user?.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Not Authorized, no permission" });
  }
};

const userProtect = async (req, res, next) => {
  let token = req.cookies.jwtUser;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.user).select("-password");
      if (!user) {
        return res.status(401).json("Not Authorized, User not found");
      }
      if (user.isBlocked) {
        res
          .status(403)
          .json("Your Account is blocked, please contact adminstrator");
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json("Not Authorized, Invalid Token");
    }
  } else {
    res.status(401).json("Not Authorized, No token");
  }
};

export { protect, isAdmin, userProtect };
