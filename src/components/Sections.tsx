import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sections() {
  return (
    <section className="grid grid-cols-12 gap-4 py-8">
      {/* NARGUILES */}
      <Link
        href="/narguiles"
        className="col-span-6 md:col-span-3 h-[16rem] flex flex-col bg-slate-50/10 hover:bg-slate-50/20 p-2 rounded-xl ease-in-out duration-300"
      >
        <div className="overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/18781628/pexels-photo-18781628/free-photo-of-roxo-lilas-vidro-copo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Narguiles"
            width={400}
            height={400}
            quality={100}
            className="object-cover h-full w-full object-right-top rounded-xl hover:scale-125 ease-in-out duration-500"
          />
        </div>
        <div className="mt-2 text-start">
          <h4 className="text-white">Narguiles</h4>
        </div>
      </Link>

      {/* ESSENCIAS */}
      <Link
        href="#"
        className="col-span-6 md:col-span-3 h-[16rem] flex flex-col bg-slate-50/10 hover:bg-slate-50/20 p-2 rounded-xl ease-in-out duration-300"
      >
        <div className="overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/13536673/pexels-photo-13536673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Narguiles"
            width={400}
            height={400}
            quality={100}
            className="object-cover h-full w-full object-center rounded-xl hover:scale-125 ease-in-out duration-500"
          />
        </div>
        <div className="mt-2 text-start">
          <h4 className="text-white">Esencias</h4>
        </div>
      </Link>

      {/* ACESSORIOS */}
      <Link
        href="#"
        className="col-span-6 md:col-span-3 h-[16rem] flex flex-col bg-slate-50/10 hover:bg-slate-50/20 p-2 rounded-xl ease-in-out duration-300"
      >
        <div className="overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/8551077/pexels-photo-8551077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Outros"
            width={400}
            height={400}
            quality={100}
            className="object-cover h-full w-full object-center rounded-xl hover:scale-125 ease-in-out duration-500"
          />
        </div>
        <div className="mt-2 text-start">
          <h4 className="text-white">Accesorios</h4>
        </div>
      </Link>

      {/* OUTROS */}
      <Link
        href="#"
        className="col-span-6 md:col-span-3 h-[16rem] flex flex-col bg-slate-50/10 hover:bg-slate-50/20 p-2 rounded-xl ease-in-out duration-300"
      >
        <div className="overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/9461908/pexels-photo-9461908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Outros"
            width={400}
            height={400}
            quality={100}
            className="object-cover h-full w-full object-center rounded-xl hover:scale-125 ease-in-out duration-500"
          />
        </div>
        <div className="mt-2 text-start">
          <h4 className="text-white">Otros</h4>
        </div>
      </Link>
    </section>
  );
}

export default Sections;
