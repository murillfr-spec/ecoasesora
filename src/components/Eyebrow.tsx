import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, variant = 'light', className = '' }) => {
  const textColor = variant === 'dark' ? 'text-green-400' : 'text-green-600';
  const lineColor = variant === 'dark' ? 'bg-green-400' : 'bg-green-500';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`w-7 h-[2px] rounded-full ${lineColor}`} />
      <span className={`text-xs sm:text-sm font-bold tracking-widest uppercase ${textColor}`}>{children}</span>
    </span>
  );
};
