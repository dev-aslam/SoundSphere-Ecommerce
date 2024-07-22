import User from "../models/userSchema.js";
import generateToken from "../util/accessToken.js";

// @desc Admin Login and set token
// @route POST/api/admin/login
// @access Public
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(403).json("Invalid email or password");
  }
};

// @desc Admin Logout and delete token
// @route POST/api/admin/logout
// @access Public
const logoutAdmin = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "develpoement",
    expires: new Date(0),
  });
  console.log("logout");
  res.status(200).json({ message: "Logged out Successfully" });
};

export { loginAdmin, logoutAdmin };
