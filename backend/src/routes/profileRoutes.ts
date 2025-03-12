import express from "express";
import { createOrUpdateProfile } from "../controllers/profileController";

const profileRoutes = express.Router();

profileRoutes.post("/profile", createOrUpdateProfile);

export default profileRoutes;
