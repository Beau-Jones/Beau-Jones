interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className }) => {
  return (
    <section className={`w-full h-96 p-8 border border-dashed border-red-500 ${className}`}>
      {children}
    </section>
  );
};

export default Panel;