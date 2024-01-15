import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ item }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className="container w-full min-h-[100VH] pt-16 pb-12">
      <div className="card2 mt-6 h-[200px]">
        <img className="card1-img" src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="card1-title">{item.titulo}</h3>
          <p className="card1-subtitle">{item.descripcion}</p>
          <p className="card1-subtitle">Categoría: {toCapital(item.categoria)}</p>
          <hr className="card1-divider my-4"></hr>
          <div className='card1-footer'>
            <p className="precio ml-6 pb-8">${item.precio}</p>
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail