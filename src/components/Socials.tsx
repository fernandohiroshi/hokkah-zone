import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";

function Socials() {
  return (
    <section className="flex justify-between items-center mt-16 mb-8">
      <h2 className="text-xl md:text-2xl flex items-center gap-2">
        Productos de Narguiles
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
    </section>
  );
}

export default Socials;
