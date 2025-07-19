"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../Button";
import { MenuIcon,XIcon } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href={"/"}>
            <h1 className="text-2xl font-semibold tracking-wider text-primary text-shadow-lg">
              SAPHIRUS
            </h1>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-600 hover:text-primary transition-colors text-shadow-sm"
          >
            Inicio
          </a>
          <a
            href="#destacados"
            className="text-gray-600 hover:text-primary transition-colors text-shadow-sm"
          >
            Destacados
          </a>
          <a
            href="#productos"
            className="text-gray-600 hover:text-primary transition-colors text-shadow-sm"
          >
            Productos
          </a>
          <a
            href="#nosotros"
            className="text-gray-600 hover:text-primary transition-colors text-shadow-sm"
          >
            Sobre nosotros
          </a>
        </nav>
        <div className="hidden md:flex items-center space-x-4" >
          <Button>Contacto</Button>
        </div>
        <button className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen? (
                <XIcon className="h-6 text-gray-600"></XIcon>
            ) : (
                <MenuIcon className="h-6 w-6 text-gray-600"></MenuIcon>
            )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
            <nav className="flex flex-col space-y-4 text-center">
                <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Inicio
          </a>
          <a
            href="#destacados"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Destacados
          </a>
          <a
            href="#productos"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Productos
          </a>
          <a
            href="#nosotros"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Sobre nosotros
          </a>
          <Button fullWidth>Contacto</Button>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
