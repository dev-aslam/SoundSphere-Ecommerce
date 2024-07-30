// import mongoose from "mongoose";
// import User from "./userSchema.js"; // Adjust the import path as necessary

// async function createUsers() {
//   const usersData = [
//     {
//       name: "John Doe",
//       email: "johndoe@example.com",
//       password: "1236", // This will be hashed before saving
//       phoneNumber: "1234567890",
//       isVerified: false,
//       isBlocked: false,
//       isAdmin: false,
//     },
//     {
//       name: "Jane Smith",
//       email: "janesmith@example.com",
//       password: "1236",
//       phoneNumber: "0987654321",
//       isVerified: true,
//       isBlocked: false,
//       isAdmin: false,
//     },
//     {
//       name: "Bob Johnson",
//       email: "bobjohnson@example.com",
//       password: "1236",
//       phoneNumber: "1112223333",
//       isVerified: true,
//       isBlocked: true,
//       isAdmin: false,
//     },
//     {
//       name: "Alice Brown",
//       email: "alicebrown@example.com",
//       password: "1236",
//       phoneNumber: "4445556666",
//       isVerified: false,
//       isBlocked: false,
//       isAdmin: false,
//     },
//   ];

//   try {
//     const savedUsers = await User.insertMany(usersData);
//     console.log("Users created successfully:", savedUsers);
//   } catch (error) {
//     console.error("Error creating users:", error);
//   }
// }

// // Make sure to connect to your MongoDB instance before running this function
// mongoose
//   .connect("mongodb://localhost:27017/soundsphere", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     createUsers();
//   })
//   .catch((err) => console.error("Could not connect to MongoDB:", err));
