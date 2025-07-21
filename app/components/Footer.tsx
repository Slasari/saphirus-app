import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-8 justify-around bg-primary pt-15'>
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