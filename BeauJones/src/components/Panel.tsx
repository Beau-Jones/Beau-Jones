import React, { useEffect, useRef, useState } from 'react';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className = '', backgroundImage, backgroundColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

 const bgStyle: React.CSSProperties = {
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }),
    ...(backgroundColor && {
      backgroundColor,
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold: 0.20 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full h-96 transition-opacity duration-700 ${
        isVisible ? 'fade-slide-down' : 'opacity-0 -translate-y-5'
      } ${className}`}
      style={bgStyle}
    >
      {children}
    </section>
  );
};

export default Panel;
