import Item from "./Item";
import { toCapital } from "../helpers/toCapital";


const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container">
        <h2 className="pricing-plan my-2">{toCapital(titulo)}</h2>

        <div className="w-full flex flex-wrap justify-center  sm:grid grid-cols-4 gap-4">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList