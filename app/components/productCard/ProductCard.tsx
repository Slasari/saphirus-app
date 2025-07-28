import React from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { Product } from '@/app/helpers/types'

const ProductCard = ({product}: {product: Product}) => {
  console.log(product)
  return (
    <div className='flex flex-col w-2xs sm:w-3xs gap-4 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md'>
        <img src={'https://media.discordapp.net/attachments/929789644286091264/1399402617041326201/20250110-aerosol-clean-cotton-saphirus.jpg?ex=6888debf&is=68878d3f&hm=c4da6fe83d2dd825b01e95e0ffa28977f983d834c21e398938e2f15aac982b67&=&format=webp&width=968&height=968'}></img>
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
            <Button variant='tertiary'>Consultar</Button>
          </Link>
        </div>
            
    </div>
  )
}

export default ProductCard