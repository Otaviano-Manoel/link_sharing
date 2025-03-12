import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
