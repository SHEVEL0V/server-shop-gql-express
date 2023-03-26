/** @format */
import { OAuth2Client } from "google-auth-library";

export const verifyTokenGoogle = async (token) => {
  const key = process.env.GOOGLE_CLIENT_ID;
  //----if key is not set, throw error----//
  if (!key) {
    throw new Error("No GOOGLE_KEY provided");
  }
  //-----authorize client-----//
  const client = new OAuth2Client(key);

  if (!client) {
    throw new Error("No authorized GOOGLE");
  }

  //-----verify token-----//
  const res = await client.verifyIdToken({ idToken: token });
  //-----return decoded token-----//
  return res.getPayload();
};
