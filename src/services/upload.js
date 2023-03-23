/** @format */
import fs from "fs/promises";
import { authModelCloud } from "./auth";
import { Storage } from "@google-cloud/storage";
import { ErrorMessage } from "../error";

export const uploadFile = async (path, filename) => {
  const jwt = await authModelCloud();
  const bucketName = "buket-image";
  const storage = new Storage({ authClient: jwt });
  const options = { destination: filename };

  //------if path is not provided return error------//
  if (!path) {
    ErrorMessage("Absent file", 404);
  }
  //------upload file to google cloud storage------//
  const [File] = await storage.bucket(bucketName).upload(path, options);
  //------remove file from tmp folder------//
  fs.unlink(path);
  //------if URL is not provided return error------//
  if (!File) {
    ErrorMessage("Error upload file");
  }
  return File.metadata;
};
