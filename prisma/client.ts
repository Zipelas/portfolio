import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from 'generated/prisma/client';

export const db = new PrismaClient().$extends(withAccelerate());
