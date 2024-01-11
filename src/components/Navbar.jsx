import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Cafetería</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>       
            <li><Link className="menu-link" to="/productos/Desayunos">Desayunos</Link></li>
            <li><Link className="menu-link" to="/productos/Comida">Comida</Link></li>
            <li><Link className="menu-link" to="/productos/Postres">Postres</Link></li>
            <li><Link className="menu-link" to="/productos/Bebidas">Bebidas</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar