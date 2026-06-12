import { useState, useEffect } from "react";

export default function AIAssistant() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [open, setOpen] = useState(false);
  const [showAI, setShowAI] = useState(true);
  

  const handleAsk = () => {
    const msg = message.toLowerCase();

    if (msg.includes("pengalaman")) {
      setResponse(
        "Muhammad Suyuti memiliki pengalaman sebagai Freelance IT Support, Teknisi IT, dan Quality Control."
      );
    } else if (
      msg.includes("skill") ||
      msg.includes("keahlian")
    ) {
      setResponse(
        "Keahlian utama: Instalasi CCTV, Jaringan LAN, Hardware Komputer, Software, VoIP, dan IT Support."
      );
    } else if (msg.includes("cctv")) {
      setResponse(
        "Ya, Suyuti memiliki pengalaman instalasi dan maintenance CCTV analog."
      );
    } else if (
      msg.includes("kontak") ||
      msg.includes("hubungi")
    ) {
      setResponse(
        "Silakan hubungi melalui WhatsApp atau Email yang tersedia di website."
      );
    } else {
      setResponse(
        "Maaf, saya belum memahami pertanyaan tersebut. Coba tanyakan tentang pengalaman, skill, CCTV, atau kontak."
      );
    }
  };

  useEffect(() => {
  let timeout;

  const handleScroll = () => {
    setShowAI(false);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setShowAI(true);
    }, 1000);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
    <button
  onClick={() => setOpen(!open)}
  className={`fixed bottom-36 right-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-[9999] flex items-center overflow-hidden transition-all duration-500 ${
    showAI
      ? "px-4 py-3 gap-2"
      : "w-11 h-11 justify-center"
  }`}
>
  <span className="text-xl">🤖</span>

  <span
    className={`whitespace-nowrap transition-all duration-300 ${
      showAI
        ? "opacity-100 max-w-[100px]"
        : "opacity-0 max-w-0"
    }`}
  >
    Tanya AI
  </span>
</button>

      {open && (
        <div className="fixed bottom-52 right-5 w-80 bg-violet rounded-xl shadow-xl p-4 z-[9999]">
          <h3 className="font-bold mb-2">
            Tanya Suyuti AI
          </h3>

          <input
            type="text"
            placeholder="Tulis pertanyaan..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="w-full border p-2 rounded mb-2"
          />

          <button
            onClick={handleAsk}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Kirim
          </button>

          {response && (
            <div className="mt-3 text-sm">
              {response}
            </div>
          )}
        </div>
      )}
    </>
  );
}