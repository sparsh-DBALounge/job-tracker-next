import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
    return new Response('Logged Out', { status: 200 });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
