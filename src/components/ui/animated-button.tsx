import React from 'react';
import { Button } from './moving-border';
import { cn } from '../../lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function AnimatedButton({ children, className, href, onClick }: AnimatedButtonProps) {
  const Component = href ? 'a' : 'button';
  
  return (
    <Button
      as={Component}
      href={href}
      onClick={onClick}
      className={cn(
        "bg-red-600/80 text-white border-red-500/50",
        className
      )}
      containerClassName="w-auto min-w-[160px]"
      borderClassName="bg-[radial-gradient(var(--red-500)_40%,transparent_60%)]"
    >
      {children}
    </Button>
  );
}