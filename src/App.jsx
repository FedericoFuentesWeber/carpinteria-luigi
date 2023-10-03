import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
     <NavBar/>
     <ItemListContainer greeting='Bienvenidos a la carpinteria de Luigi'/>
    </>
  )
}

export default App