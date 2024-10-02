import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'


function App() {

  const saludo = () => {
    alert("saludos desde App")
  }

  return (
    <div className="container" >
      <NavBar />
      <ItemListContainer saludo={"Hola Mundo."} saludar={saludo} />
      

    </div>
  )
}

export default App
