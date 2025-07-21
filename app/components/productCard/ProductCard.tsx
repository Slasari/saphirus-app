import React from 'react'
import { Button } from '../Button'

const ProductCard = () => {
  return (
    <div className='flex flex-col w-2xs sm:w-3xs gap-4 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md'>
        <img src={'https://media.discordapp.net/attachments/1389938709771714752/1394687722412834937/20250110-aerosol-clean-cotton-saphirus.jpg?ex=687ef7e9&is=687da669&hm=4dc0842d3f59e57a1ab81b24838e1a5aea749af7a1c2188a35379bfe42074d4d&=&format=webp&width=968&height=968'}></img>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold'>Aerosol Clean Cotton</h1>
            <p className='text-green-600 font-semibold'>{new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                    maximumFractionDigits: 0,
                  }).format(5100)}</p>
            <p>Floral</p>
        </div>
        <div className='flex justify-center mb-5'>
            <Button variant='tertiary'>Consultar</Button>
        </div>
            
    </div>
  )
}

export default ProductCard