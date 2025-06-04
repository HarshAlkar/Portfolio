
import React from 'react';
import { cn } from '@/lib/utils';

interface NeonTextProps {
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'accent' | 'cyan';
  className?: string;
  as?: React.ElementType;
  gradient?: boolean;
  animate?: boolean;
}

export const NeonText: React.FC<NeonTextProps> = ({
  children,
  color = 'blue',
  className,
  as: Component = 'span',
  gradient = false,
  animate = false,
}) => {
  const getColorClass = () => {
    if (gradient) {
      return 'text-gradient';
    }
    
    switch (color) {
      case 'blue':
        return 'text-primary';
      case 'purple':
        return 'text-accent';
      case 'accent':
        return 'text-professional-accent';
      case 'cyan':
        return 'text-cyan-400';
      default:
        return 'text-primary';
    }
  };

  return (
    <Component
      className={cn(
        getColorClass(),
        animate && 'pulse-professional',
        'font-semibold transition-all duration-300',
        className
      )}
    >
      {children}
    </Component>
  );
};
