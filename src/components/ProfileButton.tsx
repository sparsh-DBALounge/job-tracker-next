import { RootState } from '@/types';
import { useSelector } from 'react-redux';
import avatar from '../../public/avatar.png';
import Image from 'next/image';

const ProfileButton = ({
  view,
  openSidebar,
}: {
  view: 'navbar' | 'sidebar';
  openSidebar: boolean;
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      {view === 'sidebar' && (
        <div
          className={`${
            !openSidebar ? 'justify-center' : ''
          } border-t-1 border-[#ccc] flex gap-5 items-center p-2 cursor-pointer
          hover:bg-gray-500 hover:text-white transition-all ease-in-out 200ms bg-gray-200`}
        >
          <img src={user.avatarUrl} alt='user-avatar' height={35} width={35} />
          {openSidebar && <p>{user.username}</p>}
        </div>
      )}

      {view === 'navbar' && <div></div>}
    </>
  );
};

export default ProfileButton;
