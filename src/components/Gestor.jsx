import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

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

    return (
        <div className="bg-sky-100">

            <div class="divTable greyGridTable">
                <div class="divTableHeading">
                    <div class="divTableRow">
                        <div class="divTableHead">Producto</div>
                        <div class="divTableHead">Categoria</div>
                        <div class="divTableHead">Precio</div>
                        <div class="divTableHead">-</div>
                    </div>
                </div>
                <div class="divTableBody">

                    {products.map((product) => (
                        <div class="divTableRow">
                            <div className="divTableCell" key={product.id}>{product.titulo}</div>
                            <div className="divTableCell" key={product.id}>{product.categoria}</div>
                            <div className="divTableCell" key={product.id}>{product.precio}</div>
                            <div class="divTableCell">
                                <button
                                    class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md "
                                >
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        class="h-5 w-5 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
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
                <button className="bg-white">Añadir producto</button>
            </div>
        </div>
    );
};

export default ProductList;