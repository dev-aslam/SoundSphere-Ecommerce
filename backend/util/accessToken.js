import jwt from "jsonwebtoken";

const generateTokenAdmin = (res, user) => {
  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("jwtAdmin", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000,
  });
};

const generateTokenUser = (res, user, time = "1h") => {
  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: time,
  });

  res.cookie("jwtUser", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000,
  });
};

export { generateTokenAdmin, generateTokenUser };
