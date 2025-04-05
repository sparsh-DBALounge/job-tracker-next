'use client';

import { rootState } from '@/types';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { pageRoutes } from '@/utils/pageRoutes';
import { useEffect } from 'react';

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useSelector((state: rootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user.email) {
      router.push(pageRoutes.MAIN());
    }
  }, [user.email, router]);

  return <>{children}</>;
}
