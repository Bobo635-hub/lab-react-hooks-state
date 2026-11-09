import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // State for shopping cart
  const [cart, setCart] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Add products to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App