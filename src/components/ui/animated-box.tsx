import React from 'react';
import { MovingBorder } from './moving-border';
import { cn } from '../../lib/utils';

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}

export function AnimatedBox({ children, className, borderClassName }: AnimatedBoxProps) {
  return (
    <div className={cn(
      "relative p-[1px] overflow-hidden rounded-2xl",
      className
    )}>
      <div className="absolute inset-0">
        <MovingBorder duration={2000} rx="30%" ry="30%">
          <div className={cn(
            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]",
            borderClassName
          )} />
        </MovingBorder>
      </div>
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl">
        {children}
      </div>
    </div>
  );
}