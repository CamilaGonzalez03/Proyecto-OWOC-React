import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products'
import ItemListCount from '../CounterCard/ItemListCount'

const ItemDetailContainer = () => {

const {id: itemId} = useParams()

const [item, setItem] = useState({}) 
    
    useEffect(() => {
        getItemDetail().then( response => {
            setItem ( response )
        })
    }, [])
    


const getItemDetail  = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ( products.find( p => p.id === Number(itemId) ) )
        }, 1000);
    })
}

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10">
            <figure><img src={item.img} alt={item.name} class="ml-5"/></figure>
            <div className="card-body">
                <h2 className="card-title" class="text-orange-600 text-xl font-bold">{ item.name }</h2>
                <p class="text-purple-700 text-xl">Precio por Kilo { item.price }</p>
                <ItemListCount />
            </div>
        </div>
    )
}

export default ItemDetailContainer
