import { useState } from 'react'
import './App.css'
import Index from "./components"
import Registro from './components/Registro'
import Ordenes from './components/Ordenes'
import ListaOrdenes from './components/ListaOrdenes'

function App() {
  
  return (
    <div className="App">
      
      <br></br>    
    <br></br>
      <p>

        Buenas tardes instructora. Este diseño es preliminar debido a que no hemos visto aún el enrutamiento
        de las distintas vistas. Se irá actualizando en función del desarrollo de los temas.


      </p>

      <br></br>    
    <br></br>


    <Index/>
    <br></br>    
    <br></br>  
    <Registro/>
    <br></br>    
    <br></br>
    <Ordenes/>
    <br></br>    
    <br></br>
    <ListaOrdenes/>
    </div>
  )
}

export default App
