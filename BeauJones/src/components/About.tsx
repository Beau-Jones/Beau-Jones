const AboutPanel = () => {
  return (
    <div className="bg-black grid grid-cols-2 h-full overflow-hidden fade-slide-down"
     style={{
            WebkitMask: 'linear-gradient(to bottom, transparent 0%, black 60%, black 100%)',
            mask: 'linear-gradient(to bottom, transparent 0%, black 60%, black 100%)'
      }}>
      <div className="pl-28 pr-16 py-16 border-l-2 border-purple-500 text-white flex flex-col justify-center">
        <div className="max-w-lg mx-auto text-left">
          <h1 className="text-5xl font-bold inter-font">Hello,</h1>
          <br />
          <p className="text-4xl inter-font border-b-2 border-purple-500 pb-4">
            My goal is to learn everything I can about the wide world of technology.
          </p>
        </div>
      </div>

      <div className="bg-contain bg-no-repeat bg-center w-[150%] overflow-hidden" style={{ backgroundImage: `url(/purp_planet.jpg)`}} />
    </div>
  );
};

export default AboutPanel;