import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import prisma from './prisma';

export async function getCookieValue() {
  const cookieStore = await cookies();

  const auth_token = cookieStore.get('auth_token')?.value;
  if (!auth_token) return false;

  const secret = process.env.JWT_SECRET;
  if (!secret) return false;

  try {
    const token = jwt.verify(auth_token, secret) as jwt.JwtPayload;

    const email = token?.email;
    if (!email || typeof email !== 'string') return false;

    const userExists = await prisma.user.findFirst({ where: { email } });
    if (!userExists) return false;

    return true;
  } catch (error) {
    return false;
  }
}
