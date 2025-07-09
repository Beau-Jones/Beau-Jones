const buttonClass =
  "px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-md transition duration-200 hover:scale-105 hover:shadow-lg";
const buttonBg = { backgroundColor: "rgb(54, 11, 48)" };


function ContactMe() {
  return (
    <div className="relative h-full overflow-hidden inter-font">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/space_dust.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
        <h1 className="text-3xl font-bold text-white">Contact Me</h1>

        <div className="flex flex-row items-center justify-center gap-4">
          <button className={buttonClass} style={buttonBg}>
            Résumé
          </button>
          <button className={buttonClass} style={buttonBg}>
            <img src="/github-mark-white.png" alt="GitHub" className="w-8 h-8 object-contain" />
          </button>
          <button className={buttonClass} style={buttonBg}>
            <img src="/InBug-White.png" alt="LinkedIn" className="w-8 h-8 object-contain" />
          </button>
          <button className={buttonClass} style={buttonBg}>
            Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
