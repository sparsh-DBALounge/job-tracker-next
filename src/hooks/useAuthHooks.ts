import { useActionDispatch } from './useActionDispatch';

export const useAuthHooks = () => {
  const { removeUser } = useActionDispatch();

  const logout = () => {
    removeUser();
  };

  return { logout };
};
