import Link from "next/link";
import React from "react";
import CartButton from "./CartButton";

function Header() {
  return (
    <header className="w-full bg-slate-950/20 backdrop-blur-3xl sticky top-0">
      <div className="max-w-5xl mx-auto flex justify-between items-end px-2 py-4">
        <Link href="/">
          <h1 className="text-xl">Hokkah Zone</h1>
        </Link>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
