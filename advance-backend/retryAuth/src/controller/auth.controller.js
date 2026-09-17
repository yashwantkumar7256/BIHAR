import userModel from "../models/auth.model.js";
import bcrypt from "bcrypt";
import {
  genrateToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.util.js";
import cookie from "cookie-parser";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(300).json({
        message: "enter every field",
      });
    }
    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      return res.status(300).json({
        message: "user already exist",
      });
    }
    const hased = await bcrypt.hash(password, 12);
    const user = await userModel.create({
      email,
      password: hased,
      name,
    });
    const { accessToken, refreshToken } = genrateToken({ userId: user._id });
    user.refreshToken = refreshToken;

    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    res.status(201).json({
      message: "user created successfully",
      user,
      accessToken,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err.message);
  }
};

export const login = async (req, res) => {
  const token = req.headers.authorization;

  console.log("FULL TOKEN:", token);

  if (!token) {
    return res.json("token is required");
  }

  const accessToken = token.split(/\s+/)[1];

  if (!accessToken) {
    return res.json("access token not found");
  }

  try {
    const decode = verifyAccessToken(accessToken);

    const user = await userModel.findById(decode.id);

    return res.json({
      user: {
        username: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res.json(err.message);
  }
};

export const refresh = async (req, res) => {
  let refreshtoken = req.cookies.refreshToken;
  console.log("cookie", refreshtoken);

  try {
    if (!refreshtoken) {
      return res.json("cookie is required");
    }
    const decoded = verifyRefreshToken(refreshtoken);
    const user = await userModel.findById(decoded.id);
    if (refreshtoken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();
    }

    const { accessToken, refreshToken: newRefreshToken } = genrateToken({
      userId: user.id,
    });

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
    user.refreshToken=newRefreshToken
    await user.save()
    res.status(200).json({
      message:"refresh successfully",
      refreshtoken
    })

  } catch (err) {
    console.log(err);
    return res.json(err.message);
  }
};
