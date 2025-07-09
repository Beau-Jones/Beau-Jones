export default function Header() {
  return (
    <header className="relative h-[900px] w-full text-white overflow-hidden">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/purp_blast.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <nav className="relative z-10 max-w-5xl mx-auto px-4 py-6 flex justify-center items-center">
        <ul className="flex gap-8 text-lg font-inter">
          <li><a href="#" className="hover:text-blue-300 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Projects</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Contact</a></li>
        </ul>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center pb-35 inter-font">
        <h1 className="text-5xl font-bold mb-4">Beau Jones</h1>
        <p className="text-xl">Web Developer • Software Engineer • Human</p>
      </div>
    </header>
  );
}