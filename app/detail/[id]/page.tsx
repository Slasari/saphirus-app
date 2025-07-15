import { Button } from '@/app/components/Button'
import React from 'react'

const productDetail = () => {
  return (
    <div className='w-full flex justify-center '>
        <div className='shadow-2xl'>
            <img className='w-lg' src={"https://cdn.discordapp.com/attachments/1389938709771714752/1394687722412834937/20250110-aerosol-clean-cotton-saphirus.jpg?ex=6877b7a9&is=68766629&hm=a5296d75f8cf612e9df4a6b5573279497fce76e99754666335fd22aa91410600&"}></img>
        </div>
        <div className='p-15 flex flex-col gap-5'>
            <h1 className='font-semibold text-4xl text-shadow-sm'>Nombre</h1>
            <p className='text-green-600 font-semibold text-2xl text-shadow-sm'>{new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                    maximumFractionDigits: 0,
                  }).format(5100)}</p>
            <p>Descripcion</p>
            <h4 className='font-semibold'>Caracteristicas</h4>
            <div>
                <p>Contenido neto: <span>480ml</span></p>
                <hr></hr>
            </div>
            <div>
            <p>Familia: <span>Toretto</span></p>
            <hr></hr>
            </div>
            <div>
            <p>stock</p>
            <hr></hr>
            </div>
            <div>
                <Button>Consultar</Button>
            </div>
        </div>
    </div>
  )
}

export default productDetail