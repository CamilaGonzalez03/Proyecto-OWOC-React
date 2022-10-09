import React, { useEffect, useState } from 'react'
import ItemCardContainer from './ItemCardContainer'
import {products} from '../Products'


const ItemListContainer = () => {
    
    const styles = {
        color: '#CA431D',
        fontFamily: 'cursive',
        fontSize: '25px',
        paddingTop: '20px',
        textAlign: 'center',
    }

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then( response => {
            console.log( response );
            setItems( response )
        })
        }, [])
        
    const getProducts = () => {
        return new Promise( resolve => {
            setTimeout(() => {
            resolve( products )
            }, 1000);
        })
        }

    return (
        <>
            <div style={styles}>TIENDA DE PRODUCTOS!</div>
            <div class="flex justify-center">
            <div className="grid grid-cols-3 gap-8">
            { items.map( i => <ItemCardContainer key={i.id} {...i}/> ) }
            </div>
            </div>
        </>
    )
}

export default ItemListContainer