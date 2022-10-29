import React, {useEffect, useState} from 'react'
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'

const ListContainer = () => {

    const [items, setItems] = useState([])

useEffect(() => {
    getItems()
    }, [])

//ACCEDER A UN DOCUMENTO
const getItem = () => {
    const db = getFirestore()
    const docRef = doc(db, 'productos', 'h7R5Y0ync9BCGi932wvg')
    getDoc( docRef ).then( snapshot => {
        console.log( {id: snapshot.id, ...snapshot.data()} );
    })
}

//COLECCIÓN SIN FILTROS
const getItems = () => {
    const db = getFirestore()
    const itemsRef = collection(db, 'productos')
    getDocs( itemsRef ).then( snapshot => {
        const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}) )
        //console.log(data);
        setItems(data)
    })
}


    return (
        <div className='ml-10'>
            { items.map( i => <li key={i.id}>{ i.title }</li> ) }
        </div>
    )
}

export default ListContainer