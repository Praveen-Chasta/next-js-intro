import { ReactNode } from 'react';

export default function({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="border-b p-2">
        20% Off for devotees of Lord Krishna
        {children}
      </div>
    </div>
  );
}
