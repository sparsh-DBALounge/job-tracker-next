'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import closeSidebar from '../../../public/close-sidebar.png';
import openSidebarIcon from '../../../public/open-sidebar.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';
import { useActionDispatch } from '@/hooks/useActionDispatch';
import { useRef } from 'react';
import { useAuthHooks } from '@/hooks/useAuthHooks';

const links = [
  {
    id: 1,
    srcDark: './home-dark.png',
    srcLight: './home-light.png',
    name: 'Home',
    alt: 'home',
    href: '/',
  },

  {
    id: 2,
    srcDark: './settings-dark.png',
    srcLight: './settings-light.png',
    name: 'Settings',
    alt: 'settings',
    href: '/settings',
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const { setsidebarOpen } = useActionDispatch();
  const { sidebarOpen } = useSelector((state: RootState) => state.config);
  const imageRef = useRef<HTMLImageElement>(null);
  const { logout } = useAuthHooks();

  return (
    <div
      className={`${
        sidebarOpen ? ' min-w-[250px]' : 'min-w-[70px]'
      } h-screen bg-[#cccccc4d] flex flex-col relative`}
    >
      <Image
        onClick={() => setsidebarOpen()}
        src={sidebarOpen ? closeSidebar : openSidebarIcon}
        alt='close'
        height={35}
        width={35}
        className={`${
          sidebarOpen ? 'right-2' : 'right-5'
        } absolute top-2 cursor-pointer bg-gray-200 p-2 rounded-md 
        hover:bg-gray-300 transition-all ease-in-out 200ms`}
      />
      <div className='flex flex-col gap-3 mt-[50px] w-full p-2'>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={`${
              pathName === link.href
                ? 'bg-gray-500 text-white'
                : 'hover:bg-gray-200 transition-all ease-in-out 200ms'
            }  ${
              !sidebarOpen ? 'justify-center' : ''
            } flex w-full gap-5 items-center px-3 py-2 rounded-md hover:shadow-md`}
          >
            <img
              src={pathName === link.href ? link.srcLight : link.srcDark}
              alt={link.alt}
              className='w-5 h-5'
            />
            {sidebarOpen && <p>{link.name}</p>}
          </Link>
        ))}
      </div>

      <div
        onClick={logout}
        onMouseEnter={() => {
          if (imageRef.current) imageRef.current.src = './logout-white.png';
        }}
        onMouseLeave={() => {
          if (imageRef.current) imageRef.current.src = './logout-dark.png';
        }}
        className='flex items-center justify-center gap-5 
      mt-auto border-t border-[#ccc] h-[40px] hover:bg-red-500 hover:text-white cursor-pointer
      transition-all ease-in-out duration-200'
      >
        {sidebarOpen && <p>Logout</p>}
        <img
          ref={imageRef}
          src='./logout-dark.png'
          alt='logout'
          className='w-5 h-5'
        />
      </div>
    </div>
  );
};

export default Sidebar;
