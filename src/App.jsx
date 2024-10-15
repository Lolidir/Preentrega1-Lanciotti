import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'


function App() {

  const saludo = () => {
    alert("saludos desde App")
  }

  return (
    <div className="container" >

      <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={ <ItemListContainer greeting="Bienvenidos" /> } />
          </Routes>
          
      
      </BrowserRouter>
      
      

    </div>
  )
}

export default App
