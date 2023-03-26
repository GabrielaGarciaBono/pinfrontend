import logo from './logo.svg';
import './App.css';
import './sass/index.scss';
import Navbar from './Vistas/Navbar';
import Contacto from './Vistas/Contacto';
import Home from './Vistas/Home';
import Talleres from './Vistas/Talleres';
import Nosotros from './Vistas/Nosotros';
import Servicios from './Vistas/Servicios';



function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <Nosotros/>
      <Servicios/>
      <Talleres/>
      <Contacto/>
        
      
    </div>
  );
}

export default App;
