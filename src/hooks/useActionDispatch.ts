import { setUser, removeUser } from '@/redux/slice/authSlice';
import { setsidebarOpen } from '@/redux/slice/configSlice';
import { UserType } from '@/types';
import { useDispatch } from 'react-redux';

export const useActionDispatch = () => {
  const dispatch = useDispatch();

  return {
    setUser: (payload: UserType) => dispatch(setUser(payload)),
    removeUser: () => dispatch(removeUser()),
    setsidebarOpen: () => dispatch(setsidebarOpen()),
  };
};
