'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useAuthHooks } from '@/hooks/useAuthHooks';

export const LoginForm = () => {
  const { isPending, login } = useAuthHooks();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    login(e, formData);
  };

  return (
    <form className='auth__form' onSubmit={handleSubmit}>
      {/* Email */}
      <div className='auth__input'>
        <label htmlFor='email'>Email</label>
        <input
          value={formData.email}
          onChange={handleOnChange}
          type='email'
          id='email'
          required
        />
      </div>

      {/* Password */}
      <div className='auth__input'>
        <label htmlFor='password'>Password</label>
        <input
          value={formData.password}
          onChange={handleOnChange}
          type='password'
          id='password'
          required
        />
      </div>

      <button type='submit' className='auth__button' disabled={isPending}>
        {isPending ? (
          <Loader2 size={25} className='animate-spin mx-auto' />
        ) : (
          'Login'
        )}
      </button>

      <p className='text-center'>
        Dont&apos;t have an account?{' '}
        <Link href='/signup' className='text-blue-500'>
          Signup
        </Link>
      </p>
    </form>
  );
};
