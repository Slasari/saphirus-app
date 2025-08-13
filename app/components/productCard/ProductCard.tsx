import React from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { Product } from '@/app/helpers/types'

const ProductCard = ({product}: {product: Product}) => {
  console.log(product)
  return (
    <div className='flex flex-col w-2xs sm:w-3xs gap-4 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md'>
        <img src={'https://media.discordapp.net/attachments/929789644286091264/1399402617041326201/20250110-aerosol-clean-cotton-saphirus.jpg?ex=689df6bf&is=689ca53f&hm=7ebd375e37a6ef6469df0d323337d336d9ca9e05db4db79cf2ce1a607078594f&=&format=webp&width=968&height=968'}></img>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold'>{product.name}</h1>
            <p className='text-green-600 font-semibold'>{new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS',
                    maximumFractionDigits: 0,
                  }).format(product.price)}</p>
            <p>{product.family_name}</p>
        </div>
        <div className='flex justify-center mb-5'>
          <Link href={`/detail/${product.id}`}>
            <Button variant='tertiary'>Ver</Button>
          </Link>
        </div>
            
    </div>
  )
}

export default ProductCard