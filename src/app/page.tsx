import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-6 px-2">
      <div className="flex  justify-between items-center">
        <h2 className="text-2xl flex items-center gap-2">
          Tabacalera, Productos de Narguile en General{" "}
          <TbRating18Plus className="animate-pulse text-red-500" />
        </h2>
        <div className="flex items-center gap-4">
          <FaInstagramSquare
            size={30}
            className="hover:scale-125 ease-in-out duration-300 cursor-pointer"
          />
          <FaWhatsappSquare
            size={30}
            className="hover:scale-125 ease-in-out duration-300 cursor-pointer"
          />
        </div>
      </div>
    </main>
  );
}
