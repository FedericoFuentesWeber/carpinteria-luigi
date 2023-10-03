import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Carpinteria Luigi</h1>

        <ul>
            <li>Tablas</li>
            <li>Muebles</li>
            <li>Pedidos Personalizados</li>
        </ul>

        <CartWidget/>
    </header>
  )
}

export default NavBar