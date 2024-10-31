import Link from "next/link";
import React from "react";
import { GiShoppingCart } from "react-icons/gi";

function CartButton() {
  return (
    <Link href="/cart" title="Cart">
      <div className="flex items-center gap-1">
        <GiShoppingCart size={32} />
        <span className="text-sm border-b animate-pulse">0</span>
      </div>
    </Link>
  );
}

export default CartButton;
