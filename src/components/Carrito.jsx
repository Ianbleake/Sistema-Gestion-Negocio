import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container w-full min-h-[100VH] pt-16 pb-16">
            <div className='card mt-4 sm:w-auto'>
                <h1 className="pricing-plan mb-2">Resumen de su compra:</h1>

                <div className='sm:grid grid-cols-3'>
                    {
                        carrito.map((prod) => (
                            <div key={prod.id} className='mb-4 p-6 rounded-2xl border-2 border-dashed border-black sm:m-4'>
                                
                                <h3 className='text-center font-semibold text-lg mb-2 sm:text-2xl'>{prod.titulo}</h3>
                                <ul className='list-disc ml-4'>
                                    <li className='sm:text-lg'>Precio unitario: ${prod.precio}</li>
                                    <li className='sm:text-lg'>Precio total: ${prod.precio * prod.cantidad}</li>
                                    <li className='sm:text-lg'>Cantidad: {prod.cantidad}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>

                    {
                        carrito.length > 0 ?
                            <>
                                <h2 className='pricing-plan'>Precio total: ${precioTotal()}</h2>
                                <div className='flex mt-4 gap-4'>
                                    <button className='button_top' onClick={handleVaciar}>Vaciar  </button>
                                    <button className='button_top'><Link to="/checkout">Finalizar compra</Link></button>
                                </div>

                            </> :
                            <h2>Su carro está vacío. Intente de nuevo. </h2>
                    }
                
            </div>

        </div>
    )
}

export default Carrito