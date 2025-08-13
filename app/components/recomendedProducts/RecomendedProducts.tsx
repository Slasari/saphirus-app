import { URL_RECOMENDED } from '@/app/helpers/variables/variables';
import React from 'react'
import ProductCard from '../productCard/ProductCard';
import { Product } from '@/app/helpers/types';

const RecomendedProducts = async ({id}: {id:string}) => {

    const recomendedProducts = await fetch(`${URL_RECOMENDED}?product=${id}`, {
    cache: "no-store",
  });
  const productList = await recomendedProducts.json();
  console.log(productList)
  return (
    <div className='flex justify-center flex-col items-center py-10 gap-5'>
        <h2 className='font-semibold text-2xl'>RECOMENDADOS</h2>
        <div className='flex flex-wrap gap-10'>
            {
            productList.data?.map((p : Product) => (
                <ProductCard product={p} key={p.id} />  
            ))
        }
        </div>
    </div>
  )
}

export default RecomendedProducts