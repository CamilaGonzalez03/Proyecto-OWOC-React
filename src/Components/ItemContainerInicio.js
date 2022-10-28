import React from 'react'
import almendras from '../Recursos/Almendras 400.png'

const ItemContainerInicio = ( ) => {
    const styles = {
        color: '#CA431D',
        fontFamily: 'cursive',
        fontSize: '20px',
        paddingTop: '20px',
        textAlign: 'center',
    }
    
    return (
        <div style={styles} className="flex flex-nowrap justify-center justify-items-center items-center">
            <img className="rounded-full m-10" src={almendras} alt="almendras"/>
            <h2>Encontrá todo lo que buscas. Venta de frutos secos, granolas, semillas y más!</h2>
        </div>
    )
}

export default ItemContainerInicio