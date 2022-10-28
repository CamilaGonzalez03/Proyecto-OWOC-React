import './App.css';
import React from 'react'
import CartProvider from './Context/CartContext'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemContainerInicio from './Components/ItemContainerInicio';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer'
import Cart from './Components/Cart';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <h1 className='titulo' >OWOC Almacen Natural</h1>
            <Routes>
              <Route path={'/Inicio'} element={<ItemContainerInicio/>} />
              <Route path={'/Productos'} element={<ItemListContainer/>} />
              <Route path={'/Productos/item/:id'} element={<ItemDetailContainer/>} />
              <Route path={'/Carrito'} element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
