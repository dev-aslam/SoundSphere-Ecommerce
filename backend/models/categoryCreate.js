// import Category from "./categorySchema.js";
// // import connectDB from "../config/db.js";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const categories = [
//   {
//     categoryName: "Over-Ear Headphones",
//     categoryDescription:
//       "Comfortable, high-quality sound, noise-canceling over-ear headphones.",
//     isActive: true,
//     offers: {
//       offerName: "Summer Sale",
//       offerDescription: "Get 20% off on all over-ear headphones!",
//       startDate: new Date("2024-06-01"),
//       endDate: new Date("2024-06-30"),
//     },
//   },
//   {
//     categoryName: "In-Ear Headphones",
//     categoryDescription:
//       "Compact, lightweight, and perfect for on-the-go listening.",
//     isActive: true,
//     offers: {
//       offerName: "Back to School Discount",
//       offerDescription: "Enjoy 15% off on in-ear headphones for students.",
//       startDate: new Date("2024-08-01"),
//       endDate: new Date("2024-08-31"),
//     },
//   },
//   {
//     categoryName: "Wireless Headphones",
//     categoryDescription:
//       "Experience the freedom of wireless with our range of Bluetooth headphones.",
//     isActive: true,
//     offers: {
//       offerName: "Holiday Specials",
//       offerDescription: "Get up to 25% off on selected wireless headphones.",
//       startDate: new Date("2024-12-01"),
//       endDate: new Date("2024-12-31"),
//     },
//   },
//   {
//     categoryName: "Noise-Canceling Headphones",
//     categoryDescription:
//       "Block out the world and enjoy pure music with noise-canceling headphones.",
//     isActive: true,
//     offers: {
//       offerName: "Exclusive Offer",
//       offerDescription: "Save 30% on noise-canceling headphones.",
//       startDate: new Date("2024-07-01"),
//       endDate: new Date("2024-07-31"),
//     },
//   },
//   {
//     categoryName: "Sports Headphones",
//     categoryDescription:
//       "Durable and sweat-resistant headphones perfect for workouts and sports activities.",
//     isActive: true,
//     offers: {
//       offerName: "Fitness Frenzy",
//       offerDescription: "Special 10% discount on all sports headphones.",
//       startDate: new Date("2024-05-01"),
//       endDate: new Date("2024-05-31"),
//     },
//   },
// ];

// const insertCategories = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     await Category.insertMany(categories);
//     console.log("Categories inserted successfully!");
//   } catch (error) {
//     console.error("Error inserting categories:", error);
//   } finally {
//     await mongoose.disconnect();
//   }
// };

// // connectDB();
// insertCategories();
