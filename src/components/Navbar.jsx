import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Popular', path: '/popular' },
  { label: 'Review', path: '/review' },
]

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="w-full bg-[#0d2a1a] px-50 py-2.5 flex items-center justify-between">
      <Link
        to="/"
        className="text-white text-3xl"
        style={{ fontFamily: "'Lobster', cursive" }}
      >
        Green plants.
      </Link>

      <ul className="flex items-center gap-8">
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
    </nav>
  )
}

export default Navbar
