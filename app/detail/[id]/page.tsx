import { Button } from "@/app/components/Button";
import React from "react";
import NavDetail from "./NavDetail";
import RecomendedProducts from "@/app/components/recomendedProducts/RecomendedProducts";
import Footer from "@/app/components/Footer";
import { URL_DETAIL } from "@/app/helpers/variables/variables";

const productDetail = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const productJSON = await fetch(`${URL_DETAIL}?id=${id}`, {
    cache: "no-store",
  });
  const productData = await productJSON.json();

  const product = productData.data

  console.log(product)

  return (
    <div className="w-full flex flex-col ">
      <NavDetail />
      <div className="pt-25 flex justify-center gap-20 w-full px-6 md:px-12">
        <div className="shadow-2xl">
          <img
            className="w-lg"
            src={
              "https://media.discordapp.net/attachments/929789644286091264/1399402617041326201/20250110-aerosol-clean-cotton-saphirus.jpg?ex=689df6bf&is=689ca53f&hm=7ebd375e37a6ef6469df0d323337d336d9ca9e05db4db79cf2ce1a607078594f&=&format=webp&width=968&height=968"
            }
          ></img>
        </div>
        <div className="p-15 flex flex-col gap-5">
          <h1 className="font-semibold text-4xl text-shadow-sm">
            {product.name}
          </h1>
          <p className="text-green-600 font-semibold text-2xl text-shadow-sm">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
              maximumFractionDigits: 0,
            }).format(product.price)}
          </p>
          <p className="text-gray-800">
            {product.description}
          </p>
          <h4 className="font-bold text-secondary text-2xl">CARACTERISTICAS</h4>
          <div>
            <p className="text-gray-500">
              Familia: <span className="text-black font-semibold">{product.family.name}</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500">
              Fragancia:{" "}
              <span className="text-black font-semibold">{product.fragrance.name}</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500">
              Utilidad:{" "}
              <span className="text-black font-semibold">{product.usage.name}</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500">
              Contenido neto:{" "}
              <span className="text-black font-semibold">{product.net_content}</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500">
              stock: <span className="text-black font-semibold">{product.stock}</span>
            </p>
          </div>
          <div className="pt-7">
            <Button>Consultar</Button>
          </div>
        </div>
      </div>
      <RecomendedProducts id={id} />
      <Footer />
    </div>
  );
};

export default productDetail;
