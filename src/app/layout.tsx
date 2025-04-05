import { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/provider';
import { ReactQueryProvider } from './ReactQueryProvider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Job-Tracker',
  description: 'Jai Shree Krishna',
};

export default function rootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className='antialiased'>
        <ReactQueryProvider>
          <ReduxProvider>{children}</ReduxProvider>
          <Toaster position='top-right' />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
