import React from 'react'
import { Link } from 'react-router-dom'


const ItemListCard = ({id, img, name}) => {

  return (
    <>
    <Link to ={`/Productos/item/${id}`}>
        <div className="card w-96 bg-base-100 shadow-xl m-5">
          <figure className="px-10 pt-10">
            <img src={img} alt={name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-purple-700 text-xl">{name}</h2>
          </div>
        </div>
    </Link>
    </>
  )
}

export default ItemListCard