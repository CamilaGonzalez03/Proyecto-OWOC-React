import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainerInicio from './Components/ItemListContainerInicio';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Components/Card/ItemListContainer';
import ItemDetailContainer from './Components/Card/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <h1 className='titulo' >OWOC Almacen Natural</h1>
        <Routes>
          <Route path={'/Inicio'} element={<ItemListContainerInicio/>} />
          <Route path={'/Tienda'} element={<ItemListContainer/>} />
          <Route path={'/Tienda/item/:id'} element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
