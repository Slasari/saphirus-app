import React from 'react'
import Link from 'next/link'
export const products = [
  {
    id: 1,
    name: 'Blue Ceylon Sapphire',
    description: 'Exceptional blue sapphire from Sri Lanka',
    price: '$2,450',
    image:
      'https://images.unsplash.com/photo-1615655110598-6ec0c8cce90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 2,
    name: 'Royal Blue Sapphire',
    description: 'Vibrant blue with excellent clarity',
    price: '$3,200',
    image:
      'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80',
  },
  {
    id: 3,
    name: 'Star Sapphire',
    description: 'Rare star effect with six-ray star pattern',
    price: '$4,750',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
  },
  {
    id: 4,
    name: 'Pink Sapphire',
    description: 'Delicate pink hue with exceptional brilliance',
    price: '$3,850',
    image:
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
]
export function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Exquisite Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each sapphire in our collection is carefully selected for its color,
            clarity, cut, and carat weight.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {product.description}
              </p>
              <p className="text-blue-700 font-medium">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
