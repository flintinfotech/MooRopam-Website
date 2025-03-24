import React, { useEffect, useRef, useState } from 'react';
import './index.css'; // Create this file for styles

interface SectionProps {
  children: React.ReactNode;
}

const VisOnScroll: React.FC<SectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Unobserve after it's visible
        }
      },
      {
        threshold: 0.01, // Adjust this to control when the animation triggers
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`w-full section ${isVisible ? 'slide-in' : ''}`}>
      {children}
    </div>
  );
};

export default VisOnScroll;
