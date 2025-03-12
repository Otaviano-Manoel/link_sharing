import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body.user;

  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { email } = req.body.user;

  try {
    const user = await findUser(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};

export const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body.user;

  try {
    const user = await findUser(email);

    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid password" });
      return;
    }

    res.status(200).json({ message: "User authenticated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error authenticating user" });
  }
};

export const findUser = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
