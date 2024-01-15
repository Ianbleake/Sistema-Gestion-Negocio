import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'

const Item = ({ producto }) => {
  return (
    <div className="card1">
      <img className='card1-img' src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4 className='card1-title mb-2'>{producto.titulo}</h4>
        <p className='card1-subtitle mb-4'>Categoría: {toCapital(producto.categoria)}</p>
        <hr class="card1-divider mb-4"></hr>
        <div className='card1-footer'>
          <div className='card1-price'><span>$</span>{producto.precio}</div>
          <button className="card1-btn"><Link to={`/item/${producto.id}`}>Ver más</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Item