import Image from 'next/image';
import { LoginForm } from './LoginForm';
import authImage from '../../../../public/login-image.jpg';

export default function signup() {
  return (
    <div className='container'>
      <div className='auth__container'>
        {/* Left Half */}
        <div className='form__container'>
          <h1 className='title'>Login</h1>
          <LoginForm />
        </div>

        {/* Right Half --> Image*/}
        <div className='image__container'>
          <div className='image__wrapper'>
            <Image
              src={authImage}
              alt='auth-image'
              className='image'
              fill
              priority
              sizes='(max-width: 768px) 0px, 500px'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
