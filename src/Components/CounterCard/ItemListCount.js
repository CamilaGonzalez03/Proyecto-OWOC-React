import React from 'react'
import ItemCount from './ItemCount'

export const ItemListCount = ({texto}) => {

    const onAdd = (quantity) => {
        console.log (`compraste ${quantity} unidades`);
    }


    return (
        <>
            <ItemCount initial={1} stock={10} onAdd={onAdd }/>
        </>
        
    )
    }

export default ItemListCount

