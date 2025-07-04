const AboutPanel = () => {
  return (
    <div className="bg-black grid grid-cols-2 h-full"
     style={{
            WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 60%, black 100%)',
            mask: 'linear-gradient(to bottom, transparent 0%, black 60%, black 100%)'
      }}>
      <div className="p-8 border-1 border-purple-500 text-white">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p>This is the about panel.</p>
      </div>
      <div className="bg-cover bg-center z-10" style={{ backgroundImage: `url(/purp_planet.jpg)`}} />
    </div>
  );
};

export default AboutPanel;