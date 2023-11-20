import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import PedidosPersonalizados from './components/PedidosPersonalizados/PedidosPersonalizados';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/categoria/:categoryId' element={ <ItemListContainer/> } />
            <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
            <Route path='/pedidos-personalizados' element={<PedidosPersonalizados />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h2>Sitio en construcción</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App