export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Beau Jones</div>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Skills</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}