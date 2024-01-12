import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container w-full min-h-[100VH] pt-16 pb-12">
            <div className='card mt-4'>
                <h1 className="pricing-plan mb-2">Resumen de su compra:</h1>

                {
                    carrito.map((prod) => (
                        <div key={prod.id} className='mb-4 rounded-2xl border-2 border-dashed border-black'>
                            <br />
                            <h3>{prod.titulo}</h3>
                            <p>Precio unitario: ${prod.precio}</p>
                            <p>Precio total: ${prod.precio * prod.cantidad}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <br />
                        </div>
                    ))
                }

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