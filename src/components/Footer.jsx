const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#proyek">Proyek</a>
        <a href="#tool">Tools</a>
        <a href="#kontak">Kontak</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Suyuti29" atribut target="_blank">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/msuyuti210/" atribut target="_blank">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://ceridi8.wordpress.com/" atribut target="_blank">
          <i className="ri-wordpress-line ri-2x"></i>
        </a>
        <a href="https://www.youtube.com/@m.suyuti210" atribut target="_blank">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
