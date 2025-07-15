import React from "react";
import portada from "../../../public/portada.jpg";
import Image from "next/image";
import { Button } from "../Button";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
            Las mejores{" "}
            <span className="font-semibold text-primary text-shadow-sm">fragancias</span> al
            mejor precio
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            El aroma te transporta a lugares lejanos, a los seres queridos y
            amados, a momentos especiales guardados en gratos recuerdos. Se
            necesita sólo un instante para que todo lo que te rodea se vuelva
            encantador.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button>Destacados</Button>
            <Button variant="secondary">Catalogo</Button>
          </div>
        </div>
        <div className="relative h-80 md:h-full">
          <Image
            src={portada}
            alt="not found"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
