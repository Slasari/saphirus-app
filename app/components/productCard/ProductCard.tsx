import React from 'react'
import { Button } from '../Button'

const ProductCard = () => {
  return (
    <div className='flex flex-col w-2xs sm:w-3xs gap-4 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md'>
        <img src={'https://cdn.discordapp.com/attachments/1389938709771714752/1394687722412834937/20250110-aerosol-clean-cotton-saphirus.jpg?ex=6877b7a9&is=68766629&hm=a5296d75f8cf612e9df4a6b5573279497fce76e99754666335fd22aa91410600&'}></img>
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
            <Button>Consultar</Button>
        </div>
            
    </div>
  )
}

export default ProductCard