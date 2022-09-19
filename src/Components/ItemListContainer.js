import React from 'react'

const ItemListContainer = ( {name} ) => {
    const styles = {
        color: '#CA431D',
        fontFamily: 'cursive',
        fontWeight: '15px',
        paddingTop: '20px',
        textAlign: 'center',
    }
    return (
        <h2 style={styles}>Hola {name}! Estos son nuestros productos, elegí el que mas te gusta y agregalo al carrito.</h2> 
    )
}

export default ItemListContainer