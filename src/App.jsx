import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Tablas from './components/Tablas/Tablas'
import Muebles from './components/Muebles/Muebles'
import PedidosPersonalizados from './components/PedidosPersonalizados/PedidosPersonalizados'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/tablas' element={<Tablas />} />
          <Route path='/muebles' element={<Muebles />} />
          <Route path='/pedidos-personalizados' element={<PedidosPersonalizados />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ItemListContainer/>
    </div>
  )
}

export default App