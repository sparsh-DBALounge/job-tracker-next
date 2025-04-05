import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '../types/index';
import { pageRoutes } from '@/utils/pageRoutes';
import { useEffect } from 'react';

export const WithAuth = (Component: React.ElementType) => {
  return function authenticatedComponent(props: any) {
    const { user } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    useEffect(() => {
      if (!user.email?.trim()) {
        router.push(pageRoutes.SIGNUP());
      }
    }, [user.email, router]);

    return <Component {...props}>{props.children}</Component>;
  };
};
