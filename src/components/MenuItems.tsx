import React from "react";
import Image from "next/image";

interface MenuItemsProps {
  id: number;
  name: string;
  price: number;
  image: string;
  addCart: (id: number) => void;
}

function MenuItems({ id, name, price, image, addCart }: MenuItemsProps) {
  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-1 h-[24rem] flex flex-col shadow-sm shadow-white/60 rounded-xl justify-around p-2 gap-2 overflow-hidden hover:bg-slate-50/20">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          quality={100}
          className=" p-2 object-cover h-[18rem] w-full object-center rounded-2xl hover:scale-90 ease-in-out duration-500"
        />
      </div>
      <div className="px-2 flex justify-between items-center flex-col">
        <div className="flex justify-between text-sm w-full">
          <h4 className="text-white">{name}</h4>
          <div>{price.toFixed(2)}</div>
        </div>
      </div>
      <button className="bg-cyan-900 hover:bg-cyan-700 ease-in-out duration-300 rounded-xl">
        add +
      </button>
    </div>
  );
}

export default MenuItems;
