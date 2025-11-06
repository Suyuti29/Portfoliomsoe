import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section  */}
      <div className="hero grid md:grid-cols-2 item center pt-10 xl:gap-0 gap-6 grid:col-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <p className="text-1xl font-extrabold italic text-center text-amber-600 dark:text-amber-400 tracking-wide leading-relaxed drop-shadow-md">Sedang bekerja, sebagai Teknisi IT di PT. Puterako Inti Buana </p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 ">Hi, Saya Muhammad Suyuti</h1>
          <p className="=text-base/loose mb-6 opacity-50">Pengalaman sebagai Quality Control | Planning | IT Support | Admin Logistik</p>
          <div className="flex item-center sm:gap-4 gap-2">
            <a href="#kontak" className="bg-blue-500 p-4 rounded-2xl hover:bg-blue-700">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-blue-500 p-4 rounded-2xl hover:bg-blue-700">
              Lihat Proyek<i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] rounded-4xl md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" />
      </div>
      {/*End Hero Section  */}

      {/* Tentang Section */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Hai perkenalkan Saya Muhammad suyuti, lulusan Universitas Serang Raya Tahun 2018. Memiliki pengalaman kerja selama ± 4 tahun di berbagai bidang industri manufaktur alas kaki, dengan pemahaman mendalam terhadap proses perencanaan
            produksi, kontrol kualitas dan pengelolaan admin dibidang logistik. Selain itu, aktif sebagai freelance IT Support, menangani instalasi jaringan, perakitan dan perbaikan perangkat komputer, serta troubleshooting sistem.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-1xl mb-1">
                  7<span className="text-violet-500">+</span>
                  <p>Proyek Selesai</p>
                </h1>
              </div>
              <div>
                <h1 className="text-1xl mb-1">
                  4<span className="text-violet-500">+</span>
                  <p>Tahun Pengalaman Kerja</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Tentang Section */}

      {/* Pengalaman Section  */}
      <div className="proyek mt-20 " id="pengalaman">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Pengalaman Kerja
        </h1>
        <section className="text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Gambar di Kiri */}
          <div className="relative mb-12 md:mb-0 md:mr-12">
            <img src={DataImage.FreelanceeImage} alt="Design" className="w-80 md:w-96" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-yellow-400 text-lg font-bold">Freelance</span>
              <p className="text-sm text-gray-200 font-bold">IT</p>
            </div>
          </div>

          {/* Teks di Kanan */}
          <div className="max-w-lg">
            <p className="text-gray-400 uppercase text-sm tracking-widest">Freelance</p>
            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Freelance <span className="text-blue-400"> IT </span>
            </h1>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Instalasi perangkat modem robustel di PT. Pos Indonesia untuk keperluan administrasi, pemasangan dan konfigurasi cctv analog untuk berbagai klien, instalasi dan konfigurasi sistem operasi komputer, baik windows maupun linux,
              perbaikan hardware dan troubleshooting laptop serta komputer, editor audio video channel youtube dagusto_animation
            </p>
          </div>
        </section>
        <section className="text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Gambar di Kiri */}
          <div className="relative mb-12 md:mb-0 md:mr-12">
            <img src={DataImage.QualityImage} alt="Design" className="w-80 md:w-96" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-yellow-400 text-lg font-bold">Quality</span>
              <p className="text-sm text-gray-200 font-bold">Control</p>
            </div>
          </div>

          {/* Teks di Kanan */}
          <div className="max-w-lg">
            <p className="text-gray-400 uppercase text-sm tracking-widest">PT. Adis Dimension Footwear</p>
            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Quality <span className="text-blue-400">Control</span>
            </h1>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Melakukan inspeksi kualitas produk pada setiap tahap produksi untuk memastikan standar mutu terpenuhi. Berkoordinasi dengan tim produksi dan divisi terkait dalam menangani temuan serta melakukan tindakan perbaikan. Menyusun
              laporan hasil inspeksi secara detail, termasuk analisis penyebab masalah dan memberikan rekomendasi peningkatan efisiensi proses produksi
            </p>
          </div>
        </section>
        <section className="text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Gambar di Kiri */}
          <div className="relative mb-12 md:mb-0 md:mr-12">
            <img src={DataImage.PlanImage} alt="Design" className="w-80 md:w-96" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-yellow-400 text-lg font-bold">Staff</span>
              <p className="text-sm text-gray-200 font-bold">Planning</p>
            </div>
          </div>

          {/* Teks di Kanan */}
          <div className="max-w-lg">
            <p className="text-gray-400 uppercase text-sm tracking-widest">PT. POU CHEN INDONESIA</p>
            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Staff <span className="text-blue-400">Planning</span>
            </h1>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Mengelola data dan administrasi pemesanan (PO) melalui sistem SAP, termasuk penanganan invoice dan administrasi keuangan. Mengurus dokumen bea cukai (BC) saat barang datang, melakukan pemeriksaan kondisi barang untuk
              memastikan kesesuaian dengan invoice dan packing list. Berkoordinasi dan menjalin komunikasi dengan supplier atau vendor terkait pemesanan dan penerimaan barang. Selain itu, bertanggung jawab dalam pengelolaan aset perusahaan,
              termasuk persiapan dan pendataan untuk keperluan audit bulanan maupun tahunan
            </p>
          </div>
        </section>
        <section className="text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Gambar di Kiri */}
          <div className="relative mb-12 md:mb-0 md:mr-12">
            <img src={DataImage.AdminImage} alt="Design" className="w-80 md:w-96" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-yellow-400 text-lg font-bold">Admin</span>
              <p className="text-sm text-gray-200 font-bold">Logistik</p>
            </div>
          </div>

          {/* Teks di Kanan */}
          <div className="max-w-lg">
            <p className="text-gray-400 uppercase text-sm tracking-widest">PT. Ciomas Adisatwa</p>
            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Admin <span className="text-blue-400">Logistik</span>
            </h1>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Mencatat pemesanan spartpart kendaraan operasional, barang keperluan kantor. Serta disetiap harinya rutin mengecek ketersediaan stok logistik berupa bensin dan solar untuk mobilitas kendaraan yang digunakan oleh perusahaan
            </p>
            <a href="Freelance.jsx">
              <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition">Lihat</button>
            </a>
          </div>
        </section>
      </div>
      {/*End Pengalaman Section  */}

      {/* Tool */}
      <div className="tools mt-32" id="tool">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Software dan Tools
        </h1>
        <p className="w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          {/* xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  */}
          Berikut ini software dan tools yang dipakai dalam melakukan pekerjaan
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

      {/* Proyek Section */}
      <div className="proyek mt-32 py-19" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Proyek
        </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Berikut ini proyek yang pernah dibuat
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
                  <a href={proyek.link} target="_blank" rel="noopener noreferrer" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                    Lihat
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

      {/* Floating WhatsApp Button with Image */}
      <a href="https://wa.me/6287883844747" target="_blank" class="fixed bottom-5 right-5 z-50 hover:bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#2930f0] block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </span>
      </a>
    </>
  );
}

export default App;
