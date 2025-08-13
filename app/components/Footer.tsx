import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-8 justify-around bg-primary pt-15 relative'>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
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
        <div className='flex flex-col gap-2'>
            <h1 className='text-white text-2xl font-semibold'>Donde Encontrarnos</h1>
            <ul className='flex flex-col gap-3 text-white'>
                <li> Dirección: Villa Maipú, San Martín</li>
                <li> Email: Dybala@hotmail.com</li>
                <li> Whatsapp: (011) 1234-5678</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-white text-2xl font-semibold'>Legales</h1>
            <ul className='flex flex-col gap-3 text-white'>
                <li>Política de privacidad</li>
                <li>Términos y Condiciones</li>
                <li>Defensa al consumidor</li>
            </ul>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-white text-2xl font-semibold'>Redes Sociales</h1>
            <ul className='flex flex-col gap-3 text-white'>
                <li> Instagram</li>
                <li> Facebook</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer