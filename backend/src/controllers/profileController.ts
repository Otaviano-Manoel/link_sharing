import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import { findUser } from "./userController";
import { createOrUpdateLink } from "./linkController";

const prisma = new PrismaClient();

export const createOrUpdateProfile = async (req: Request, res: Response) => {
  const { email } = req.body.user;
  const {
    email: emailProfile,
    firstName,
    lastName,
    image,
    links,
  } = req.body.user.profile;

  try {
    const user = await findUser(email);
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const profile = await prisma.profile.upsert({
      where: {
        userId: user.id,
      },
      update: {
        userId: user.id,
        email: emailProfile,
        firstName,
        lastName,
        image,
      },
      create: {
        userId: user.id,
        email: emailProfile,
        firstName,
        lastName,
        image,
      },
    });

    await createOrUpdateLink(profile.id, links);

    const profileUpdated = await prisma.profile.findUnique({
      where: {
        userId: user.id,
      },
      include: {
        links: true,
      },
    });

    res.status(200).json(profileUpdated);
  } catch (error) {
    res.status(500).json({ message: "Error creating or updating profile" });
  }
};

export const findProfile = async (userId: number) => {
  return await prisma.profile.findUnique({
    where: {
      userId,
    },
  });
};
