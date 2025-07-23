import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap- 10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30
       backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li>
          <a href="#beranda" className="sm:text-lg text-base font-medium px-2 py-2 rounded hover:bg-violet-600 hover:text-white transition duration-300 block">
            Beranda
          </a>
        </li>
        <li>
          <a href="#tool" className="sm:text-lg text-base font-medium px-2 py-2 rounded hover:bg-violet-600 hover:text-white transition duration-300 block">
            Pengalaman
          </a>
        </li>
          <li>
          <a href="#tool" className="sm:text-lg text-base font-medium px-2 py-2 rounded hover:bg-violet-600 hover:text-white transition duration-300 block">
            Tools
          </a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-lg text-base font-medium px-2 py-2 rounded hover:bg-violet-600 hover:text-white transition duration-300 block">
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg text-base font-medium px-2 py-2 rounded hover:bg-violet-600 hover:text-white transition duration-300 block">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
