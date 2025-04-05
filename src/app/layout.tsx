import { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/provider';

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
