import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const AgregarProducto = ({ onProductoAgregado }) => {
    const [nuevoProducto, setNuevoProducto] = useState({
        titulo: "",
        categoria: "",
        precio: "",
    });

    const agregarProducto = async () => {
        try {
            // Añade el nuevo producto a la colección "Productos"
            const docRef = await addDoc(collection(db, "Productos"), nuevoProducto);

            console.log("Producto agregado correctamente con ID: ", docRef.id);

            // Limpia el estado del nuevo producto después de agregarlo
            setNuevoProducto({
                titulo: "",
                categoria: "",
                precio: "",
            });

            // Llama a la función proporcionada por el padre para notificar que se ha agregado un nuevo producto
            onProductoAgregado();
        } catch (error) {
            console.error("Error al agregar el producto", error);
        }
    };

    return (
        <div className="container w-full min-h-[100VH] pt-16 pb-16">
            <h2>Añadir nuevo producto</h2>
            <label>Título: </label>
            <input
                type="text"
                value={nuevoProducto.titulo}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, titulo: e.target.value })}
            />
            <br />
            <label>Categoría: </label>
            <input
                type="text"
                value={nuevoProducto.categoria}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, categoria: e.target.value })}
            />
            <br />
            <label>Precio: </label>
            <input
                type="text"
                value={nuevoProducto.precio}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
            />
            <br />
            <button onClick={agregarProducto}>Añadir producto</button>
        </div>
    );
};

export default AgregarProducto;
