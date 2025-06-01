import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white text-black p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">TNS Reparaciones</Link>
        </div>

        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul
          className={`sm:flex space-x-6 items-center ${
            open ? 'block' : 'hidden'
          } sm:block mt-4 sm:mt-0`}
        >
          <li>
            <Link to="/" className="hover:text-yellow-500">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios" className="hover:text-yellow-500">Servicios</Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-yellow-500">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-yellow-500">Contacto</Link>
          </li>
          <li>
            <Link to="/login" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
