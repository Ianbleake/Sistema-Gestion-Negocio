import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "Pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container w-full min-h-[100VH] pt-16 pb-12">
                <h1 className="pricing-plan my-2">Muchas gracias por su compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className="container w-full min-h-[100VH] pt-16 pb-12">
        <h1 className="pricing-plan my-2">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input type="text" placeholder="Ingrese su mesa" {...register("mesa")} />
            <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout