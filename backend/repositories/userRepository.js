import User from "../models/userSchema.js";

export const getUsers = async () => {
  return await User.find({ isAdmin: false });
};

export const blockUsers = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("user not found");
  }
  user.isBlocked = !user.isBlocked;
  return await user.save();
};
