import React from 'react';
import { Link } from 'react-router-dom';

export const MenuDes = () => {
  return (
    <div className='absolute left-0 top-14 rounded-b-md bg-emerald-500 z-20 h-auto w-full'>
      <ul className="list-none grid grid-cols-1 divide-y divide-green-300">
        <li></li>
        <li className="flex items-center h-full">
          <Link className="flex-1 text-center py-4" to="/">Inicio</Link>
        </li>
        <li className="flex items-center h-full">
          <Link className="flex-1 text-center py-4" to="/productos/Desayunos">Desayunos</Link>
        </li>
        <li className="flex items-center h-full">
          <Link className="flex-1 text-center py-4" to="/productos/Comida">Comida</Link>
        </li>
        <li className="flex items-center h-full">
          <Link className="flex-1 text-center py-4" to="/productos/Postres">Postres</Link>
        </li>
        <li className="flex items-center h-full">
          <Link className="flex-1 text-center py-4" to="/productos/Bebidas">Bebidas</Link>
        </li>
        <li className="flex items-center h-full">
          <Link className="flex-1 text-center py-4" to="/contacto">Contacto</Link>
        </li>
        <li className="flex items-center h-full">
          <Link className="flex-1 text-center py-4" to="/QR">QR</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};
