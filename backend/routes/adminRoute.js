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
  .get(protect, isAdmin, fetchCategories)
  .post(protect, isAdmin, addCategories);

//Category Edit/delete
router
  .route("/categories/:id")
  .patch(protect, isAdmin, deleteCategories)
  .put(protect, isAdmin, updateCategories);

//userList
router.get("/users", protect, isAdmin, getuserList);

//userBlock or unblock
router.patch("/users/:id", protect, isAdmin, userBlockStatus);

export default router;
