import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { IoMdBasket } from "react-icons/io";

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className='mr-4 w-20  '>
      <Link className="flex items-center gap-2" to="/carrito">
        <IoMdBasket className='h-32 w-10'/>
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget