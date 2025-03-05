import React from 'react';
import { cn } from '../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: '100' | '300' | '700' | '1000';
}

export function AnimatedSection({ children, className, delay }: AnimatedSectionProps) {
  return (
    <div className={cn(
      'animate-appear opacity-0',
      delay && `delay-${delay}`,
      className
    )}>
      {children}
    </div>
  );
}