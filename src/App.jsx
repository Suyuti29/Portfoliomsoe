import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 item center pt-10 xl:gap-0 gap-6 grid:col-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Lagi nganggur🚀</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 ">Hi, Saya Muhammad Suyuti</h1>
          <p className="=text-base/loose mb-6 opacity-50">Saya sedang tidak bekerja kurang lebih 8 bulan terakhir saya bekerja di PT. Adis Dimension Footwear</p>
          <div className="flex item-center sm:gap-4 gap-2">
            <a href="" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
              Lihat Proyek<i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s " />
      </div>
      {/*End Hero Section  */}

      {/* Tentang Section */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Hai perkenalkan Saya Muhammad suyuti Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sunt nesciunt beatae doloribus. Dicta eaque mollitia officiis amet, suscipit error nemo reiciendis omnis iusto voluptatum.
            Consectetur dignissimos sint corporis sed voluptates officia nam aliquid molestiae tempora quos optio expedita vero debitis minus, explicabo deserunt cumque praesentium ipsum, dolor repudiandae. Rem, eveniet velit est cumque
            fuga corrupti delectus consequuntur accusamus eligendi voluptate totam minima quo adipisci. Ea quam quis eligendi laudantium esse. Ad, vero aperiam? Veritatis cupiditate velit atque culpa consequuntur dolorem architecto?
            Accusamus minus illum sint? Perspiciatis corporis rem soluta consectetur, provident sed voluptatum velit aspernatur exercitationem ad tenetur maxime?
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-1xl mb-1">
                  45<span className="text-violet-500">+</span>
                  <p>Tahun pengalaman</p>
                </h1>
              </div>
              <div>
                <h1 className="text-1xl mb-1">
                  45<span className="text-violet-500">+</span>
                  <p>Tahun pengalaman</p>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Tool */}
        <div className="tools mt-32" id="tool">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Tools yang dipakai
          </h1>
          <p className="w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {/* xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  */}
            Berukut ini Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at dolorum dolores veniam reprehenderit aspernatur dicta animi, facere fugiat excepturi doloremque iure perspiciatis expedita ex, omnis nisi hic possimus
            modi.
          </p>
          <div className="tools-box mt-14 grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex item-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                <img src={tool.gambar} alt="Tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Tool */}
      </div>
      {/* End Tentang Section */}

      {/* Proyek Section */}
      <div className="proyek mt-32 py-19" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Proyek
        </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut ini
        </p>
        <div className="proyek-box mt-14 grid md:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loop mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold " key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                    Lihat website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Proyek Section */}

      {/* Kontak Section */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Kontak
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Mari terhubung dengan saya
        </p>
      </div>
      <form action="https://formsubmit.co/mssuyuti29@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan Nama....." className="border border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex flex-col gap-2">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email...." className="border border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" className="border border-zinc-500 p-2 rounded-md" placeholder="Pesan......"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 w-full cursor-pointer">
              Kirim Pesan
            </button>
          </div>
        </div>
      </form>
      {/* End Kontak Section */}
    </>
  );
}

export default App;
