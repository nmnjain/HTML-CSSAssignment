import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary-600 text-white shadow-md">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TechStore</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary-200 transition">Home</Link>
          <Link to="#" className="hover:text-primary-200 transition">Products</Link>
          <Link to="#" className="hover:text-primary-200 transition">About</Link>
          <Link to="#" className="hover:text-primary-200 transition">Contact</Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden container py-3 pb-4 bg-primary-700">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-primary-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="#" className="hover:text-primary-200 transition" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="#" className="hover:text-primary-200 transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="#" className="hover:text-primary-200 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 