"use client";

import React from "react";
import {
  URL_PRODUCTS,
  URL_FAMILY,
  URL_FRAGRANCE,
  URL_USAGE,
} from "@/app/helpers/variables/variables";
import ProductCard from "../productCard/ProductCard";
import {
  Product,
  FamilyGroup,
  FragranceForSelect,
} from "@/app/helpers/types";
import { useState, useEffect } from "react";
import CustomSelect from "./CustomSelectWrap";
import Searchbar from "../Searchbar";
import { Button } from "../Button";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0)
  const [familyGroup, setFamilyGroup] = useState([]);
  const [familyGroupSelected, setFamilyGroupSelected] = useState("");
  const [fragrance, setFragrance] = useState([]);
  const [fragranceSelected, setFragranceSelected] = useState("");
  const [usage, setUsage] = useState([]);
  const [usageSelected, setUsageSelected] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1)

  const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(()=>{
    fetch(
      `${URL_PRODUCTS}?family=${familyGroupSelected}&fragrance=${fragranceSelected}&usage=${usageSelected}&search=${debouncedSearch}&page=${page}`,
      { cache: "no-cache" }
    ).then((r) => r.json().then((response) => {setProducts(response.data[0].products); setTotalProducts(response.data[0].total_count)})); 

    if(!familyGroupSelected){
         fetch(
      `${URL_FAMILY}?fragrance=${fragranceSelected}&usage=${usageSelected}&search=${debouncedSearch}`,
      { cache: "no-cache" }
    ).then((r) => r.json().then((response) => setFamilyGroup(response.data)))
    }

    if(!fragranceSelected){
        fetch(
      `${URL_FRAGRANCE}?family=${familyGroupSelected}&usage=${usageSelected}&search=${debouncedSearch}`,
      { cache: "no-cache" }
    ).then((r) =>
      r.json().then((response) => {
        const fragranceList = response.fragranceForSelect.filter(
          (
            item: FragranceForSelect,
            index: number,
            self: FragranceForSelect[]
          ) =>
            index ===
            self.findIndex(
              (t) => t.value === item.value && t.label === item.label
            )
        );
        setFragrance(fragranceList);
      })
    );
    }

    if(!usageSelected){
        fetch(
      `${URL_USAGE}?family=${familyGroupSelected}&fragrance=${fragranceSelected}&search=${debouncedSearch}`,
      { cache: "no-cache" }
    ).then((r) =>
      r.json().then((response) => {
        const usageList = response.usageForSelect.filter(
          (
            item: FragranceForSelect,
            index: number,
            self: FragranceForSelect[]
          ) =>
            index ===
            self.findIndex(
              (t) => t.value === item.value && t.label === item.label
            )
        );
        setUsage(usageList);
      })
    );
    }

    },[familyGroupSelected, fragranceSelected, usageSelected, page,debouncedSearch])



  useEffect(() => {
    const handle = setTimeout(() => {  
    setDebouncedSearch(search);    
      setFamilyGroupSelected("")
      setFragranceSelected("")
      setUsageSelected("")
      setPage(1)
    }, 1000);

    return () => {
      clearTimeout(handle);
    };
  }, [search]);

  const handleFamily = (family: string) => {
    if (familyGroupSelected) {
      return setFamilyGroupSelected("");
    }
    setFamilyGroupSelected(family);
  };

  const handleFragrance = (fragranceId: string) => {
    setFragranceSelected(fragranceId);
  };

  const handleUsage = (usageId: string) => {
    setUsageSelected(usageId);
  };

  const nextPage = () => {
    if(8 * page < totalProducts){
      return (<Button variant="secondary" onClick={() =>  setPage(state => state + 1)}>SIGUIENTE</Button>)
    }
    return (<Button variant="disabled">SIGUIENTE</Button>)
  }
  const prevPage = () => {
    if(page > 1){
      return (<Button variant="secondary" onClick={() => setPage(state => state - 1)}>ANTERIOR</Button>)
    } 
    return (<Button variant="disabled">ANTERIOR</Button>)
  }

  const validateFamilyGroup = (family: FamilyGroup) => {
    if (family.total_products < 1) {
      return false;
    }
    if (familyGroupSelected.length < 1 || familyGroupSelected == family.id) {
      return true;
    }
  };

  return (
    <div
      id="productos"
      className="flex flex-wrap flex-col items-center px-6 md:px-12 w-full relative"
    >
      <h2 className="text-2xl font-bold m-8 text-shadow-sm text-secondary">
        PRODUCTOS
      </h2>
      <div className="w-full flex">
        <div className="w-[20%] shadow-sm p-5 flex flex-col gap-5">
          <Searchbar search={search} setSearch={setSearch} />
          <div className="flex flex-col gap-5">
            <section>
              <h2 className="font-semibold text-shadow-sm text-lg">
                Familia Olfativa
              </h2>
              <div className="flex gap-3 flex-col py-3">
                {familyGroup.map(
                  (f: FamilyGroup) =>
                    validateFamilyGroup(f) && (
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
                    )
                )}
              </div>
            </section>
            <hr className="text-gray-300"></hr>
            <section>
              <h2 className="font-semibold text-shadow-sm text-lg">
                Fragancia
              </h2>
              <CustomSelect
                options={fragrance}
                onChange={handleFragrance}
                placeholder="Elige tu fragancia"
                value={fragranceSelected}
              />
            </section>
            <hr className="text-gray-300"></hr>
            <section>
              <h2 className="font-semibold text-shadow-sm text-lg">
                Sugerencia de uso
              </h2>
              <CustomSelect
                options={usage}
                onChange={handleUsage}
                placeholder="Elige tu uso"
                value={usageSelected}
              />
            </section>
          </div>
        </div>
        <div className="w-[80%] justify-center flex flex-col gap-5">
          <div className="flex gap-5  justify-center w-[80%]">
          {/* <Button variant={prevPage} onClick={() => prevPage()}>ANTERIOR</Button> */}
          {prevPage()}
          {nextPage()}
          {/* <Button variant={nextPage} onClick={() => {nextPage(); console.log("hola")}}>SIGUIENTE</Button> */}
          </div>
        {<div className="w-full flex flex-wrap gap-10 p-10">
          {products.map((p: Product) => (
            <ProductCard key={p.id} product={p}  />
          ))}
          </div>}
        </div>
      </div>
      <div className="absolute -bottom-20 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 100"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44
    c40,10,80,-10,120,-15
    c65.63,-8.17,132.63,-6.15,197.64,1.86
    c86.21,10.68,172.14,27.18,258.69,26.24
    c83.33,-0.91,166.27,-20.36,249.6,-29.17
    c73.46,-7.66,148,-2.91,220.62,7.08
    c58.44,7.89,116.2,17.69,174.37,24.48
    V0H0V27.35
    A600.58,600.58,0,0,1,321.39,56.44Z"
            fill="white" // Tailwind blue-50
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductList;
