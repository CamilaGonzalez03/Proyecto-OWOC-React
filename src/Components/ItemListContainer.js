import React, { useEffect, useState } from 'react'
import ItemListCard from './ItemListCard'
import {products} from './Products'

const ItemListContainer = () => {

    const styles = {
        color: '#CA431D',
        fontFamily: 'cursive',
        fontSize: '25px',
        paddingTop: '20px',
        textAlign: 'center',
    }

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });
        getData.then(res => setData(res));

    }, [data])    
    

    return (
        <>
            <div style={styles}>TIENDA DE PRODUCTOS!</div>
            <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8">
                { data.map( i => <ItemListCard key={i.id} {...i}/> ) }
            </div>
            </div>
        </>
    )
}

export default ItemListContainer