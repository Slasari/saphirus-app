import { Button } from '@/app/components/Button'
import React from 'react'
import NavDetail from './NavDetail'
import { URL_RECOMENDED } from '@/app/helpers/variables/variables'

const productDetail = async ({params}: {params: {id: string}}) => {
  const id = params.id

  const recomendedProducts = await fetch(`${URL_RECOMENDED}?product=${id}`, {cache: 'no-store'})
  const productList = await recomendedProducts.json()
  console.log(productList)
  return (
    <div className='w-full flex justify-center '>
      <NavDetail />
        <div className='shadow-2xl'>
            <img className='w-lg' src={"https://media.discordapp.net/attachments/929789644286091264/1399402617041326201/20250110-aerosol-clean-cotton-saphirus.jpg?ex=688cd33f&is=688b81bf&hm=4bdc0ce01218f01269f5731cdb6a55b7bac8fce06942bcbb62dbd0bd7c4ce451&=&format=webp&width=968&height=968"}></img>
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