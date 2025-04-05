import prisma from '@/utils/prisma';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    const cookieStore = await cookies();

    const userExists = await prisma.user.findFirst({
      where: { email },
    });

    if (userExists) {
      return new Response('Email already in use', { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
        avatar_url: '',
      },
    });

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined.');
    }

    const token = jwt.sign({ email }, secret, {
      expiresIn: '1d',
    });

    cookieStore.set('auth_token', token, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    return new Response('Signup Successful', { status: 200 });
  } catch (error: any) {
    console.error('Signup error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
