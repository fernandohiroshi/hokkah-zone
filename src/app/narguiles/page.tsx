"use client";

import MenuItems from "@/components/MenuItems";
import Sections from "@/components/Sections";
import React, { useEffect, useState } from "react";
import { dataNarguiles } from "../api/page";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const addCart = () => {};

export default function Narguiles() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setProducts(dataNarguiles);
  }, []);

  return (
    <main className="max-w-5xl mx-auto py-6 px-2">
      <h2 className="mb-4 text-start">Qué estás buscando?</h2>
      <Sections />
      <h3 className="text-2xl mt-16 mb-4">Narguiles:</h3>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <MenuItems
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
            addCart={addCart}
          />
        ))}
      </div>
    </main>
  );
}
