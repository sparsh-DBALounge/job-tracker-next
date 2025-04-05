import { setsidebarOpen } from '@/redux/slice/configSlice';
import { useDispatch } from 'react-redux';

export const useActionDispatch = () => {
  const dispatch = useDispatch();

  return {
    setsidebarOpen: () => dispatch(setsidebarOpen()),
  };
};
