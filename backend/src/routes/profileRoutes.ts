import express from "express";
import {
  createOrUpdateProfile,
  getProfile,
} from "../controllers/profileController";

const profileRoutes = express.Router();

profileRoutes.post("/profile", createOrUpdateProfile);
profileRoutes.post("/getProfile", getProfile);

export default profileRoutes;
