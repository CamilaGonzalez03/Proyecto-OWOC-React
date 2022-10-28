import React, {useState} from 'react'
import {useCartContext} from '../Context/CartContext'
import ItemDetailCount from './ItemDetailCount';
import {Link} from 'react-router-dom'

export const ItemDetailCard = ({item}) => {
    const[goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        console.log (`compraste ${quantity} unidades`);
        setGoToCart(true);
        addProduct(item, quantity);
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10"> 
        <div>
            <img src={item.img} alt={item.name} className="ml-5"/>
        </div>
        <div className="card-body">
            <h2 className="card-title text-orange-600 text-xl font-bold">{ item.name }</h2>
            <p className="text-purple-700 text-xl">Precio por Kilo ${ item.price }</p>
            {
                goToCart
                ? <Link to='/Carrito'><button className='btn bg-orange-600 mt-5'>Finalizar compra</button></Link>
                : <ItemDetailCount initial={1} stock={10} onAdd={onAdd}/>
            }
        </div>
    </div>
    );
}

export default ItemDetailCard