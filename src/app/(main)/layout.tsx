import Sidebar from '@/components/core/Sidebar';
import { getCookieValue } from '@/utils/auth';
import { redirect } from 'next/navigation';

export default async function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authToken = await getCookieValue();

  return authToken ? (
    <div className='flex overflow-y-auto'>
      <Sidebar />
      <div className='flex-1'>{children}</div>
    </div>
  ) : (
    redirect('/login')
  );
}
