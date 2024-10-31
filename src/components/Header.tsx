import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full bg-slate-950/20 backdrop-blur-3xl sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-end px-2 py-4">
        <Link
          href="/"
          className="ease-in-out opacity-80 hover:opacity-100 duration-300 hover:tracking-widest"
        >
          <h1 className="text-xl uppercase">Hokkah Zone</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <nav className="flex items-center gap-4">
            <FaInstagramSquare
              size={26}
              className="hover:scale-125 ease-in-out duration-500 cursor-pointer opacity-80 hover:opacity-100"
            />
            <FaWhatsappSquare
              size={26}
              className="hover:scale-125 ease-in-out duration-500 cursor-pointer opacity-80 hover:opacity-100"
            />
          </nav>
          <CartButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
