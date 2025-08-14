'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavDetail = () => {

  const router = useRouter()
  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 fixed top-0 z-50 shadow-sm">
        <section className="max-w-7xl mx-auto flex justify-between items-center">
            <button className='font-semibold hover:text-primary cursor-pointer' onClick={() => router.push("/")}>VOLVER</button>
            <button className='font-semibold hover:text-primary cursor-pointer' onClick={() => router.push("/")}>INICIO</button>
            <button className='font-semibold hover:text-primary cursor-pointer' >CONTACTO</button>
        </section>
    </header>
  )
}

export default NavDetail