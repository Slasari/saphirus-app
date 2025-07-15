import React from 'react'

import { URL_PRODUCTS } from '@/app/helpers/variables/variables'
import ProductCard from '../productCard/ProductCard'
import { Product } from '@/app/helpers/types'


const ProductList = async () => {

    const res = await fetch( URL_PRODUCTS, {cache: 'no-cache'})
    const {data: products} = await res.json()
    console.log(products)
  return (
    <div id='destacados' className='flex flex-wrap flex-col items-center px-6 md:px-12 w-full'>
        <h2 className='text-2xl font-bold m-8 text-shadow-sm text-blue-400'>PRODUCTOS</h2>
        <div className='w-full flex'>
            <div className='w-[20%] border-8 '>
                <div>
                    <input type='text' className='w-full h-7 ' />
                </div>
            </div>
            <div className='w-[80%] flex flex-wrap gap-10 p-10'>
                {products.map((p: Product) => (
                    <ProductCard key={p.id} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductList