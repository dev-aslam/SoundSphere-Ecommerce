import User from "../models/userSchema.js";

const usersData = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "1236", // This will be hashed before saving
    phoneNumber: "1234567890",
    isVerified: false,
    isBlocked: false,
    isAdmin: false,
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "1236",
    phoneNumber: "0987654321",
    isVerified: true,
    isBlocked: false,
    isAdmin: false,
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    password: "1236",
    phoneNumber: "1112223333",
    isVerified: true,
    isBlocked: true,
    isAdmin: false,
  },
  {
    name: "Alice Brown",
    email: "alicebrown@example.com",
    password: "1236",
    phoneNumber: "4445556666",
    isVerified: false,
    isBlocked: false,
    isAdmin: false,
  },
];

const createAdminUser = async () => {
  const adminUser = await User.create(usersData[3]);

  console.log("Admin user created:", adminUser);
};

export { createAdminUser };
