import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      Toggle {darkMode ? 'Light' : 'Dark'} 
    </button>
  )
}

export default DarkModeToggle