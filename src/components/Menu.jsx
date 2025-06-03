import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white text-black p-4 shadow">
      <div className="container mx-auto sm:flex sm:justify-between sm:items-center">
        {/* Logo y hamburguesa */}
        <div className="flex justify-between items-center">
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
        </div>

        {/* Menú de navegación */}
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } flex-col sm:flex sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 w-full sm:w-auto mt-4 sm:mt-0 text-center sm:text-left`}
        >
          <li>
            <Link to="/" className="hover:text-yellow-500 block">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios" className="hover:text-yellow-500 block">Servicios</Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-yellow-500 block">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-yellow-500 block">Contacto</Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 block"
            >
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
