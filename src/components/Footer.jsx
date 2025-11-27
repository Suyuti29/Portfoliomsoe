const Footer = () => {
  return (
    <div className="w-full mt-32 py-6">
      <div className="grid grid-cols-3 items-center">
        {/* KIRI */}
        <h1 className="justify-self-start text-2xl sm:text-xl font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300">Portfolio</h1>

        {/* TENGAH */}
        <div className="flex justify-center items-center gap-4">
          <a href="https://github.com/Suyuti29" target="_blank">
            <i className="ri-github-fill ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300"></i>
          </a>

          <a href="https://www.linkedin.com/in/msuyuti210/" target="_blank">
            <i className="ri-linkedin-fill ri-2x sm:text-lg text-base px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300"></i>
          </a>

          <a href="https://cerdik8.wordpress.com/" target="_blank">
            <i className="ri-wordpress-line ri-2x sm:text-lg text-base px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300"></i>
          </a>

          <a href="https://www.youtube.com/@m.suyuti210" target="_blank">
            <i className="ri-youtube-fill ri-2x sm:text-lg text-base px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300"></i>
          </a>
        </div>

        {/* KANAN */}
        <p className="justify-self-end text-gray-300">Copyright © 2025 Msuyuti</p>
      </div>
    </div>
  );
};
// <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
//   <a href="#beranda">
//     <h1 className="text-2xl sm:text-lg font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block">Portfolio</h1>
//   </a>
//   <div className="flex items-center gap-3">
//     <a href="https://github.com/Suyuti29" atribut target="_blank">
//       <i className="ri-github-fill ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
//     </a>
//     <a href="https://www.linkedin.com/in/msuyuti210/" atribut target="_blank">
//       <i className="ri-linkedin-fill ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
//     </a>
//     <a href="https://ceridi8.wordpress.com/" atribut target="_blank">
//       <i className="ri-wordpress-line ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
//     </a>
//     <a href="https://www.youtube.com/@m.suyuti210" atribut target="_blank">
//       <i className="ri-youtube-fill ri-2x sm:text-lg text-base font-medium px-1 py-1 rounded hover:bg-violet-600 hover:text-white transition duration-300 block"></i>
//     </a>
//   </div>
//   <p>Copyright © 2025 Msuyuti</p>
// </div>

export default Footer;
