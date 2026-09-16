import jwt from "jsonwebtoken";

import config from "../config/config.js";

export const generateTokens = ({ userId }) => {
  console.log("auth called");

  const accessToken = jwt.sign({ id: userId }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ id: userId }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  console.log(accessToken, refreshToken);
  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token) => {
  const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);

  return decoded;
};

export const verifyRefreshToken = (token) => {
  const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET);

  return decoded;
};
