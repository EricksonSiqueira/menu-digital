import { EditComplementsData } from '@/utils/types';

import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const editComplementService = async ({
  id,
  name,
  maxAmount,
}: EditComplementsData) => {
  try {
    const existingRegister = await prisma.complements.findUnique({
      where: {
        id,
      },
    });

    if (!existingRegister) {
      throw new Error(`Registro não encontrado para o ID: ${id}`);
    }

    const updatedData = await prisma.complements.update({
      where: { id },
      data: {
        name: name || existingRegister.name,
        maxAmount: maxAmount || existingRegister.maxAmount,
      },
    });

    return updatedData;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError ||
      error instanceof Error
    ) {
      throw new Error(error.message);
    }
  }
};
