import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';
import Swal from 'sweetalert2'

export const Form = ({setUser}) => {

  const updateUser = ( event ) => {
    setUser( user => ({...user, [event.target.name]: event.target.value }))
    console.log( event.target.value );
    console.log( event.target.name );
  }

  return (
    <div className='m-10'>
        <h1 className='text-orange-600 text-xl font-bold'>Para finalizar tu compra, completa los siguientes datos:</h1>
        <div className='m-3'>
          <input onChange={updateUser} name='name' type="text" placeholder="Nombre y Apellido" className="input input-bordered input-orange w-full max-w-xs" />
        </div>
        <div className='m-3'>
          <input onChange={updateUser} name='phone' type="text" placeholder="Telefono" className="input input-bordered input-orange w-full max-w-xs" />
        </div>
        <div className='m-3'>
          <input onChange={updateUser} name='email' type="text" placeholder="Email" className="input input-bordered input-orange w-full max-w-xs" />
        </div>
    </div>
  )
}


const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const [user, setUser] = useState({})

    const order = {
      buyer: user,
      items: cart.map((product) => ({
        id: product.id,
        title: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    };
  
    const newOrder = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => {
        console.log(id);
      })
      Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra!',
        text: 'Los datos fueron enviados correctamente',
      })
    }

    
  
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
      <div className='text-purple-700 text-xl ml-10'>
        Total: ${totalPrice()}
      </div>
      <Form setUser={setUser}/>
      <Link to='/inicio'><button className='btn bg-orange-600 ml-10 mt-5' onClick={newOrder}>Emitir compra</button></Link>
    </>
  )
}

export default Cart