import express from "express";
import { loginAdmin, logoutAdmin } from "../controllers/adminController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.route("/products").get(protect, isAdmin).post(protect, isAdmin);
router.route("/categories").get(protect, isAdmin).post(protect, isAdmin);
router.post("/logout", logoutAdmin);

export default router;
