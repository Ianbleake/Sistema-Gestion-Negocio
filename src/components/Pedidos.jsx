import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export const Pedidos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(db, "Pedidos");
            const querySnapshot = await getDocs(productsCollection);

            const productsData = [];
            querySnapshot.forEach((doc) => {
                productsData.push({ ...doc.data(), id: doc.id });
            });

            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    const eliminarPedido = async (id) => {
        try {
            const pedidoRef = doc(db, "Pedidos", id);
            await deleteDoc(pedidoRef);
            console.log('Pedido eliminado correctamente');

            // Recarga la página después de eliminar el pedido
            window.location.reload();
        } catch (error) {
            console.error('Error al eliminar el pedido', error);
        }
    };

    return (
        <div className="bg-sky-100">
            <div className="divTable greyGridTable">
                <div className="divTableHeading">
                    <div className="divTableRow">
                        <div className="divTableHead">Cliente</div>
                        <div className="divTableHead">Mesa</div>
                        <div className="divTableHead">Pedido</div>
                        <div className="divTableHead">Total</div>
                        <div className="divTableHead">-</div>
                    </div>
                </div>
                <div className="divTableBody">
                    {products.map((product) => (
                        <div className="divTableRow" key={product.id}>
                            <div className="divTableCell">{product.cliente.nombre}</div>
                            <div className="divTableCell">{product.cliente.mesa}</div>
                            <div className="divTableCell">
                                {product.productos.map((producto) => (
                                    <ul key={producto.id}>
                                        <li>
                                            <span className="mr-4">{producto.cantidad}</span>
                                            {producto.titulo}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                            <div className="divTableCell">{product.total}</div>
                            <div className="divTableCell">
                                <button
                                    className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                                    onClick={() => eliminarPedido(product.id)}
                                >
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
