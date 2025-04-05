import { useState } from 'react';
import { LoginForm, SignupForm } from '@/types';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { pageRoutes } from '@/utils/pageRoutes';
import axios from '../utils/axios';
import { API } from '@/utils/endpoints';

export const useAuthHooks = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const router = useRouter();

  const signup = async (
    e: React.ChangeEvent<HTMLFormElement>,
    formData: SignupForm
  ) => {
    e.preventDefault();
    try {
      setIsPending(true);
      const { data } = await axios.post(API.SIGNUP(), formData);

      toast.success(data);
      router.push(pageRoutes.MAIN());
      setIsPending(false);
    } catch (error: any) {
      const errorMessage = error.response?.data || error.message;
      toast.error(errorMessage);
      setIsPending(false);
    }
  };

  const login = async (
    e: React.ChangeEvent<HTMLFormElement>,
    formData: LoginForm
  ) => {
    e.preventDefault();
    try {
      setIsPending(true);
      const { data } = await axios.post(API.LOGIN(), formData);

      toast.success(data);
      router.push(pageRoutes.MAIN());
      setIsPending(false);
    } catch (error: any) {
      const errorMessage = error.response?.data || error.message;
      toast.error(errorMessage);
      setIsPending(false);
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios.get(API.LOGOUT());
      toast.success(data);
      router.push(pageRoutes.LOGIN());
    } catch (error: any) {
      const errorMessage = error.response?.data || error.message;
      toast.error(errorMessage);
    }
  };

  return { signup, login, logout, isPending };
};
