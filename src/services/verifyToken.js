/** @format */
import { OAuth2Client } from "google-auth-library";
import { ErrorMessage } from "../error/index.js";

export const verifyToken = async (token) => {
  const key = process.env.GOOGLE_CLIENT_ID;
  //----if key is not set, throw error----//
  if (!key) {
    ErrorMessage("No GOOGLE_KEY provided", 401);
  }
  //-----authorize client-----//
  const client = new OAuth2Client(key);
  //-----verify token-----//
  const res = await client.verifyIdToken({ idToken: token });
  //-----return decoded token-----//
  return res.getPayload();
};
