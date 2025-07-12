import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in-up' | 'scale-in-bounce' | 'slide-up-fade';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  className = ""
}: ScrollRevealProps) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible 
          ? `animate-${animation} opacity-100` 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;