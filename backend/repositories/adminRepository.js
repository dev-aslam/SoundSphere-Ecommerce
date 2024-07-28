import User from "../models/userSchema.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const checkPassword = async (user, password) => {
  return await user.matchPassword(password);
};
