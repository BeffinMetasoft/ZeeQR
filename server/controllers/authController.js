const User = require("../model/userModel");
const Admin = require("../model/adminModel");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const { genAccessToken, genRefreshToken } = require("../helpers/JWT");
const createHttpError = require("http-errors");

let refreshTokenArray = [];

const signup = async (req, res, next) => {
  console.log(req.body);
  const { name, email, companyName, phone, password } = req.body;
  try {
    // check weather the user is already exist
    let isExist = await User.findOne({ email: email });
    if (isExist) throw createError.Conflict("This email already in use");

    // hasing the password
    const hash = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      companyName,
      phone,
      password: hash,
    });

    const user = await newUser.save();
    res.send({ success: true, user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // check the email is in the database
    const user = await User.findOne({ email: email });
    if (!user) throw createError.NotFound("No user found");

    // compareing the password
    const pswrd = await bcrypt.compare(password, user.password);
    if (!pswrd) throw createError.Unauthorized("password is incorrect");

    // generating acess-token and refresh-token
    const accessToken = await genAccessToken(user);
    const refreshToken = await genRefreshToken(user);

    // set the refresh-token in to an array
    refreshTokenArray.push(refreshToken);

    // set the access-token to the cookies
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: "strict",
      })
      .json({ success: true, user, refreshToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const adminlogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // check the email is in the database
    const admin = await Admin.findOne({ email: email });
    if (!admin) throw createError.NotFound("No user found");

    // compareing the password
    const pswrd = await bcrypt.compare(password, admin.password);
    if (!pswrd) throw createError.Unauthorized("password is incorrect");

    // generating acess-token and refresh-token
    const accessToken = await genAccessToken(admin);
    const refreshToken = await genRefreshToken(admin);

    // set the refresh-token in to an array
    refreshTokenArray.push(refreshToken);

    // set the access-token to the cookies
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: "strict",
      })
      .json({ success: true, admin, refreshToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refToken } = req.body;
    // console.log(req.body);

    //if there is no ref token throwing err
    if (!refToken)
      throw createHttpError.InternalServerError("no refresh token found");

    //get the ref token from the array with
    if (!refreshTokenArray.includes(refToken))
      throw createError.InternalServerError("Invalid refresh token");

    //verify the ref token from array
    jwt.verify(
      refToken,
      process.env.JWT_REFRESH_TOKEN_SECRET,
      async (err, data) => {
        try {
          if (err) throw createError.InternalServerError(err);

          //finding the user
          const userId = data._id
          const user = await User.findOne({ _id: userId })


          //black listing the used refresh token
          refreshTokenArray = refreshTokenArray.filter(
            (item) => item != refToken
          );

          //if it matches create a new pair of auth token and refresh token
          const accessToken = await genAccessToken(user);
          const refreshToken = await genRefreshToken(user);

          //saving the new refresh token to array
          refreshTokenArray.push(refreshToken);

          //sending response to the client
          res
            .status(200)
            .cookie("accessToken", accessToken, {
              httpOnly: true,
              path: "/",
              maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
              sameSite: "strict",
            })
            .json({
              success: true,
              message: "new pair of tokens created",
              refreshToken,
            });
        } catch (error) {
          next(error)
        }
      }
    );
  } catch (error) {
    console.log(error, "123456");
    next(error);
  }
};

const logout = (req, res, next) => {
  try {
    //get the ref token from body
    const { refToken } = req.body;

    //if there is no ref token throwing err
    if (!refToken)
      throw createHttpError.InternalServerError("no refresh token found");

    //get the ref token from the array with
    // if (!refreshTokenArray.includes(refToken))
    //   throw createError.Unauthorized("Invalid refresh token");

    //if it matches
    jwt.verify(
      refToken,
      process.env.JWT_REFRESH_TOKEN_SECRET,
      async (err, data) => {
        try {
          if (err)
            throw createError.Unauthorized(err)

          //black listing the used refresh token
          refreshTokenArray = refreshTokenArray.filter(
            (item) => item != refToken
          );

          res
            .clearCookie("accessToken")
            .json({ success: true, message: "Logged out successfully" });
        } catch (error) {
          next(error)
        }
      }
    );
  } catch (error) {
    console.log(error, "123456");
    next(error);
  }
};

module.exports = {
  signup,
  login,
  adminlogin,
  refreshToken,
  logout,
};
