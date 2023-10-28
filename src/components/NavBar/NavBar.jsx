import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Carpinteria Luigi</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>

          <li>
            <NavLink to="/tablas"> Tablas </NavLink>
          </li>

          <li>
            <NavLink to="/muebles"> Muebles </NavLink>
          </li>

          <li>
            <NavLink to="pedidos-personalizados"> Pedidos Personalizados </NavLink>
          </li>

        </ul>
      </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar