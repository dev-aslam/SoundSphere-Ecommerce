import express from "express";
import {
  loginAdmin,
  logoutAdmin,
  fetchCategories,
  addCategories,
  deleteCategories,
  updateCategories,
  getuserList,
  userBlockStatus,
} from "../controllers/adminController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

//ADMIN AUTH ROUTE
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);

//PRODUCT ROUTES
router.route("/products").get(protect, isAdmin).post(protect, isAdmin);

//CATEGORY ROUTE
router
  .route("/categories")
  .get(protect, fetchCategories)
  .post(protect, addCategories);

//Category Edit/delete
router
  .route("/categories/:id")
  .patch(protect, deleteCategories)
  .put(protect, updateCategories);

//userList
router.get("/users", protect, getuserList);

//userBlock or unblock
router.patch("/users/:id", protect, userBlockStatus);

export default router;
