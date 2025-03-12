import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrUpdateLink = async (
  profileId: number,
  links: [{ type: number; url: string }]
) => {
  const founds = await prisma.link.findMany({ where: { profileId } });

  const linksToDelete = founds.filter(
    (x) => links.findIndex((y) => x.url === y.url) === -1
  );

  await prisma.link.deleteMany({
    where: {
      id: { in: linksToDelete.map((x) => x.id) },
    },
  });

  for (const link of links) {
    await prisma.link.upsert({
      where: {
        url: link.url,
      },
      update: {
        type: link.type,
      },
      create: {
        profileId: profileId,
        type: link.type,
        url: link.url,
      },
    });
  }
};
