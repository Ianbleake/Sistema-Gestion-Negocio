import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbMenu2 } from "react-icons/tb";
import { MenuDes } from './MenuDes';

const Navbar = () => {
  const [menuDesplegado, setMenuDesplegado] = useState(false);

  const desplegar = () => {
    setMenuDesplegado(!menuDesplegado);
  };

  return (
    <nav className='bg-emerald-700 z-50 rounded-b-lg h-16 w-full flex justify-between items-center text-white font-varela text-2xl fixed'>
      <Link to="/" className="logo"><h1>Cafetería</h1></Link>
      <ul>
        <div className='hidden sm:block'>
          <ul className="list-none flex items-center gap-4">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos/Desayunos">Desayunos</Link></li>
            <li><Link className="menu-link" to="/productos/Comida">Comida</Link></li>
            <li><Link className="menu-link" to="/productos/Postres">Postres</Link></li>
            <li><Link className="menu-link" to="/productos/Bebidas">Bebidas</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><Link className="menu-link mr-6" to="/QR">QR</Link></li>
          </ul>
        </div>
        <button onClick={desplegar} className='bg-emerald-700 h-24'>
          <TbMenu2 className='h-32 w-10 sm:hidden' />
        </button>
        <div id='MenuDesplegable' className={menuDesplegado ? 'block' : 'hidden'}>
          <MenuDes />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
