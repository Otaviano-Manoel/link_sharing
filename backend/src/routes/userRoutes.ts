import express from "express";
import {
  createUser,
  authenticateUser,
  deleteUser,
} from "../controllers/userController";

const useRoutes = express.Router();

useRoutes.post("/signup", createUser);
useRoutes.post("/login", authenticateUser);
useRoutes.post("/delete", deleteUser);

export default useRoutes;
