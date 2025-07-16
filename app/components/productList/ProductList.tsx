"use client";

import React from "react";
import { URL_PRODUCTS, URL_FAMILY } from "@/app/helpers/variables/variables";
import ProductCard from "../productCard/ProductCard";
import { Product, FamilyGroup } from "@/app/helpers/types";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [familyGroup, setFamilyGroup] = useState([]);
  const [familyGroupSelected, setFamilyGroupSelected] = useState("");

  useEffect(() => {
    fetch(URL_PRODUCTS, { cache: "no-cache" }).then((r) =>
      r.json().then((response) => setProducts(response.data))
    );
    fetch(URL_FAMILY, { cache: "no-cache" }).then((r) =>
      r.json().then((response) => setFamilyGroup(response.data))
    );
  }, [familyGroupSelected]);

  const handleFamily = (family: string) => {
    if(familyGroupSelected){
        return setFamilyGroupSelected('')
    }
    setFamilyGroupSelected(family)
  }

  const validateFamilyGroup = (family: FamilyGroup) => {
    if(family.total_products < 1){
        return false
    }
    if(familyGroupSelected.length < 1 || familyGroupSelected == family.id){
        return true
    }
  }

  return (
    <div
      id="destacados"
      className="flex flex-wrap flex-col items-center px-6 md:px-12 w-full"
    >
      <h2 className="text-2xl font-bold m-8 text-shadow-sm text-secondary">
        PRODUCTOS
      </h2>
      <div className="w-full flex">
        <div className="w-[20%] shadow-sm p-5 flex flex-col gap-5">
          <div className="relative w-full max-w-md">
            <Search className="text-gray-600 absolute right-3 w-5 h-5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscá tus productos"
              className="w-full border-1 border-gray-300 h-12 rounded-lg focus:outline-none focus:ring-0 p-3 text-gray-600 pr-10"
            />
          </div>
          <div className="flex flex-col gap-5">
            <section>
              <h2 className="font-semibold text-shadow-sm text-lg">
                Familia Olfativa
              </h2>
              <div className="flex gap-3 flex-col py-3">
                {familyGroup.map((f: FamilyGroup) => (
                  validateFamilyGroup(f) && 
                  <button
                    key={f.id}
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => handleFamily(f.id)}
                  >
                    <img
                      src={f.icon}
                      alt="not found"
                      width={30}
                      height={30}
                      className="opacity-100 group-hover:opacity-25"
                    />
                    {familyGroupSelected == f.id ? (
                      <span className="absolute pl-2 font-semibold opacity-0 group-hover:opacity-100 text-red-600">
                        ✕
                      </span>
                    ) : (
                      <span className="absolute pl-2 font-semibold opacity-0 group-hover:opacity-100 text-green-700">
                        ✓
                      </span>
                    )}
                    <span className="w-full pl-3 text-gray-500 group-hover:text-gray-800 text-left">
                      {f.name}
                    </span>
                    <span className="text-gray-500 shadow-sm px-3 rounded-2xl py-1 group-hover:bg-secondary transition group-hover:text-white">
                      {f.total_products}
                    </span>
                  </button>
                ))}
              </div>
            </section>
            <hr className="text-gray-300"></hr>
            <section>
              <h2 className="font-semibold text-shadow-sm text-lg">
                Fragancia
              </h2>
            </section>
            <hr className="text-gray-300"></hr>
            <section>
              <h2 className="font-semibold text-shadow-sm text-lg">
                Sugerencia de uso
              </h2>
            </section>
          </div>
        </div>
        <div className="w-[80%] flex flex-wrap gap-10 p-10">
          {products.map((p: Product) => (
            <ProductCard key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
