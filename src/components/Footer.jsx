const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <a href="#beranda">
        <h1 className="text-2xl sm:text-lg font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block">Portfolio</h1>
      </a>
      <div className="flex gap-7">
        <a href="#beranda" className="sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-zinc-600 hover:text-white transition duration-300 block">
          Beranda
        </a>
        <a href="#pengalaman" className="sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-zinc-600 hover:text-white transition duration-300 block">
          Pengalaman
        </a>
        <a href="#tool" className="sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-zinc-600 hover:text-white transition duration-300 block">
          Tools
        </a>
        <a href="#proyek" className="sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-zinc-600 hover:text-white transition duration-300 block">
          Proyek
        </a>

        <a href="#kontak" className="sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-zinc-600 hover:text-white transition duration-300 block">
          Kontak
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Suyuti29" atribut target="_blank">
          <i className="ri-github-fill ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
        </a>
        <a href="https://www.linkedin.com/in/msuyuti210/" atribut target="_blank">
          <i className="ri-linkedin-fill ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
        </a>
        <a href="https://ceridi8.wordpress.com/" atribut target="_blank">
          <i className="ri-wordpress-line ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
        </a>
        <a href="https://www.youtube.com/@m.suyuti210" atribut target="_blank">
          <i className="ri-youtube-fill ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
