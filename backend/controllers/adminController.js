import generateToken from "../util/accessToken.js";
import {
  findUserByEmail,
  checkPassword,
} from "../repositories/adminRepository.js";
import {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} from "../repositories/categoryRepository.js";
import { blockUsers, getUsers } from "../repositories/userRepository.js";

// @desc Admin Login and set token
// @route POST/api/admin/login
// @access Public
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (user && (await checkPassword(user, password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(403).json({ message: "Invalid email or password" });
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

// @desc get category list
// @route GET/api/admin/categories
// @access Protected
const fetchCategories = async (req, res) => {
  try {
    const categories = await getCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

// @desc add category
// @route POST/api/admin/categories
// @access Protected
const addCategories = async (req, res) => {
  try {
    const category = await addCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc softDelete category
// @route patch/api/admin/categories/:id
// @access Protected
const deleteCategories = async (req, res) => {
  const categoryID = req.params.id;
  try {
    const category = await deleteCategory(categoryID);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc update category
// @route put/api/admin/categories/:id
// @access Protected
const updateCategories = async (req, res) => {
  const categoryID = req.params.id;
  const updatedCategory = req.body;
  try {
    const category = await updateCategory(categoryID, updatedCategory);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc getUsers
// @route Delete/api/admin/users
// @access Protected
const getuserList = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc block/unblock User
// @route patch/api/admin/users/:id
// @access Protected
const userBlockStatus = async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await blockUsers(userID);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  loginAdmin,
  logoutAdmin,
  fetchCategories,
  addCategories,
  deleteCategories,
  updateCategories,
  getuserList,
  userBlockStatus,
};
