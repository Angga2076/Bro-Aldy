export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md z-50 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Portofolio</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
