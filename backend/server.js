import express from "express";
import dotenv from "dotenv";
import adminRoute from "./routes/adminRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
// import { createAdminUser } from "./models/adminCreate.js";

dotenv.config();
const PORT = process.env.PORT || 5174;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB();
// createAdminUser();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", adminRoute);
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
