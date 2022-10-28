import React from 'react'
import { useCartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return(
            <>
                <div className='card-title text-purple-700 text-xl m-5'>No hay productos en el carrito</div>
                <Link to='/productos'><button className='btn bg-purple-900 m-5'>Ver productos</button></Link>
            </>
        )
    }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />) 
      }
      <div>
        Total: {totalPrice()}
      </div>
    </>
  )
}

export default Cart