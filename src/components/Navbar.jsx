import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Popular', path: '/popular' },
  { label: 'Review', path: '/review' },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#0d2a1a] px-6 md:px-16 py-2.5">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-3xl"
          style={{ fontFamily: "'Lobster', cursive" }}
        >
          Green plants.
        </Link>

        {/* Desktop nav — absolutely centered */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`text-sm font-bold tracking-wide transition-colors ${
                  pathname === path ? 'text-[#c49a10]' : 'text-white hover:text-[#c49a10]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 pt-4 pb-2">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm font-bold tracking-wide transition-colors ${
                  pathname === path ? 'text-[#c49a10]' : 'text-white hover:text-[#c49a10]'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
