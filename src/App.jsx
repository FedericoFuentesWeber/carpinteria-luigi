import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import PedidosPersonalizados from './components/PedidosPersonalizados/PedidosPersonalizados'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategory' element={ <ItemListContainer/> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
          <Route path='/pedidos-personalizados' element={<PedidosPersonalizados />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App