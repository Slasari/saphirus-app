import React from "react";
import portada from "../../../public/portada.jpg";
import Image from "next/image";
import { Button } from "../Button";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 bg-gradient-to-br from-white to-blue-50 relative"
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
      <div className="absolute -bottom-20 left-0 w-full overflow-hidden leading-[0] z-0">
  <svg
    className="relative block w-[calc(150%+1.3px)] h-[80px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1600 100"
    preserveAspectRatio="none"
  >
    <path
      d="M321.39,56.44c58.79,0,116-14.22,173.89-21.48,65.63-8.17,132.63-6.15,197.64,1.86,86.21,10.68,172.14,27.18,258.69,26.24,83.33-.91,166.27-20.36,249.6-29.17,73.46-7.66,148-2.91,220.62,7.08,58.44,7.89,116.2,17.69,174.37,24.48V0H0V27.35A600.58,600.58,0,0,1,321.39,56.44Z"
      fill="#f3f8fe"  // Tailwind blue-50
    />
  </svg>
</div>
    </section>
  );
};

export default Home;
