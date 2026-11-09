import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory, addToCart }) => {

  const filteredProducts = selectedCategory === 'all'
    ? sampleProducts
    : sampleProducts.filter(
        (product) => product.category === selectedCategory
      )

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  )
}

export default ProductList
