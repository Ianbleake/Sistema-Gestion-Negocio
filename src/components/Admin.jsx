import React, { useState } from 'react'
import ProductList from './Gestor';
import { Pedidos } from './Pedidos';

export const Admin = () => {
  const [showComponentA, setShowComponentA] = useState(true);
  const [showComponentB, setShowComponentB] = useState(false);

  const toggleComponentA = () => {
    setShowComponentA(!showComponentA);
    setShowComponentB(false);
  };

  const toggleComponentB = () => {
    setShowComponentA(false);
    setShowComponentB(!showComponentB);
  };

  return (
    <div className='bg-sky-100 w-full min-h-screen pt-16 pb-12 flex'>
      <div id='Menu' className='w-[40VH] h-[87VH] flex flex-col'>
        <button onClick={toggleComponentA} className='card h-32 ml-2 mt-2'>{showComponentA ? 'Hide Gestion de Productos' : 'Show Gestion de Productos'}</button>
        <button onClick={toggleComponentB} className='card h-32 ml-2 mt-4'>{showComponentB ? 'Hide Registro de Pedidos' : 'Show Registro de Pedidos'}</button>
      </div>

      <div id='Contenido' className='ml-5 flex-1 h-[160VH] col-span-4'>
      {showComponentA && <ProductList/>}
      {showComponentB && <Pedidos/>}
      </div>
    </div>
  )
}