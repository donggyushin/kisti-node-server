import jwt from "jsonwebtoken";
import User from "../models/user";

// return user, if fail to find, return null
export const returnUser = async token => {
  const userId = await decodeToken(token);
  if (userId == null) {
    return null;
  }
  const user = await User.findByPk(userId);
  return user;
};

export const generatingToken = async id => {
  // Make token that expires in 2 days with RS256 algorithm

  try {
    const token = await jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 2,
        id
      },
      "rontend!@#"
      //   { algorithm: "RS256" }
    );
    return token;
  } catch (err) {
    console.log("error 메세지: ", err);
    return null;
  }
};

// return user's id with received token
export const decodeToken = async token => {
  try {
    const decoded = await jwt.verify(token, "rontend!@#");
    return decoded.id;
  } catch (err) {
    return null;
  }
};
