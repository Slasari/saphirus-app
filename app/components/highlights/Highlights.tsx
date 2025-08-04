import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { URL_FEATURED } from '@/app/helpers/variables/variables'
import { Product } from '@/app/helpers/types'

const Highlights = async () => {

  const res = await fetch(URL_FEATURED, {cache: "no-store"})
  const featured = await res.json()
  console.log(featured)

  return (
    <div id='destacados' className='flex flex-wrap flex-col items-center px-6 md:px-12 w-full'>
        <h2 className='text-2xl font-bold m-8 text-shadow-sm text-secondary'>DESTACADOS</h2>
        <div className='flex flex-wrap justify-around w-full'>
        {featured.data.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
        ))}
        </div>
    </div>
  )
}

export default Highlights