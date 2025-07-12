import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FloatingElement = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "" 
}: FloatingElementProps) => {
  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return 'animate-float';
      case 'left':
      case 'right':
        return 'animate-float-x';
      default:
        return 'animate-float';
    }
  };

  return (
    <div 
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDirection: direction === 'down' || direction === 'right' ? 'reverse' : 'normal'
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;