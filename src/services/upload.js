/** @format */
import fs from "fs/promises";
import { authModelCloud } from "./authGoogle.js";
import { Storage } from "@google-cloud/storage";

export const uploadFile = async (path, filename) => {
  const jwt = await authModelCloud();
  const bucketName = "buket-image";
  const storage = new Storage({ authClient: jwt });
  const options = { destination: filename };

  //------if path is not provided return error------//
  if (!path) {
    throw new Error("Absent file");
  }
  //------upload file to google cloud storage------//
  const [File] = await storage.bucket(bucketName).upload(path, options);
  //------remove file from tmp folder------//
  fs.unlink(path);
  //------if URL is not provided return error------//
  if (!File) {
    throw new Error("Error uploaded file in Google Cloud Storage");
  }
  return File.metadata;
};
