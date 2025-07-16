import React from 'react'
import ProductCard from '../productCard/ProductCard'

const Highlights = () => {
  return (
    <div id='destacados' className='flex flex-wrap flex-col items-center px-6 md:px-12 w-full'>
        <h2 className='text-2xl font-bold m-8 text-shadow-sm text-secondary'>DESTACADOS</h2>
        <div className='flex flex-wrap justify-around w-full'>
        {[1,2,3,4].map(p => (
            <ProductCard key={p} />
        ))}
        </div>
    </div>
  )
}

export default Highlights