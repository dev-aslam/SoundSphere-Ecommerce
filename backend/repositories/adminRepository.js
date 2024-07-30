import User from "../models/userSchema.js";

export const adminFindByEmail = async (email) => {
  return await User.findOne({ email });
};

export const adminCheckPassword = async (user, password) => {
  return await user.matchPassword(password);
};
