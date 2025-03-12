import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import useRoutes from "./routes/userRoutes";
import profileRoutes from "./routes/profileRoutes";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use(useRoutes);
app.use(profileRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
