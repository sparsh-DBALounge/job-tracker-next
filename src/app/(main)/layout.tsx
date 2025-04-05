'use client';

import Sidebar from '@/components/core/Sidebar';
import { WithAuth } from '@/hoc/WithAuth';

function mainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex overflow-y-auto'>
      <Sidebar />
      <div className='flex-1'>{children}</div>
    </div>
  );
}

export default WithAuth(mainLayout);
