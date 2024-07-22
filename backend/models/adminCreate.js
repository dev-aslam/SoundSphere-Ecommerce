import User from "./userSchema.js";

const createAdminUser = async () => {
  const adminUser = await User.create({
    name: "Admin User",
    email: "admin@example.com",
    password: "1236", // This will be hashed automatically
    isAdmin: true,
  });

  console.log("Admin user created:", adminUser);
};

export { createAdminUser };
