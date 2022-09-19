import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import Productos from './Components/Productos';

function App() {
  return (
    <>
      <Navbar/>
      <h1 className='titulo' >OWOC Almacen Natural</h1>
      <ItemListContainer name='Cami'/>
      <Productos/>
    </>
  );
}

export default App;
