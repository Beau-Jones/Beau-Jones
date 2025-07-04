interface PanelProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className, backgroundImage }) => {
    const bgStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section className={`w-full h-96 p-8 ${className}`}
    style={bgStyle}>
      {children}
    </section>
  );
};

export default Panel;