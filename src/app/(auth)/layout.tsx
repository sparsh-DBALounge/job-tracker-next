import { redirect } from 'next/navigation';
import { getCookieValue } from '@/utils/auth';

export default async function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authToken = await getCookieValue();

  return authToken ? redirect('/') : <>{children}</>;
}
