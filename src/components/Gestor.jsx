import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(db, "Productos");
            const querySnapshot = await getDocs(productsCollection);

            const productsData = [];
            querySnapshot.forEach((doc) => {
                productsData.push({ ...doc.data(), id: doc.id });
            });

            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    const eliminarProducto = async (id) => {
        try {
            const productoRef = doc(db, "Productos", id);
            await deleteDoc(productoRef);
            console.log('Producto eliminado correctamente');

            // Recarga la página después de eliminar el producto
            window.location.reload();
        } catch (error) {
            console.error('Error al eliminar el producto', error);
        }
    };

    return (
        <div className="bg-sky-100">

            <div className="divTable greyGridTable">
                <div className="divTableHeading">
                    <div className="divTableRow">
                        <div className="divTableHead">Producto</div>
                        <div className="divTableHead">Categoria</div>
                        <div className="divTableHead">Precio</div>
                        <div className="divTableHead">-</div>
                    </div>
                </div>
                <div className="divTableBody">

                    {products.map((product) => (
                        <div className="divTableRow" key={product.id}>
                            <div className="divTableCell">{product.titulo}</div>
                            <div className="divTableCell">{product.categoria}</div>
                            <div className="divTableCell">{product.precio}</div>
                            <div className="divTableCell">
                                <button
                                    className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md "
                                    onClick={() => eliminarProducto(product.id)}
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
            <div className="flex items-center justify-center mt-5">
                <button className="bg-white"><Link to='/Agregar'>Agregar Producto</Link></button>
            </div>
        </div>
    );
};

export default ProductList;
