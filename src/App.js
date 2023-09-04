import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/Header';
import Home from './pages/Home';
import Page404 from './pages/Page.404';
import Post from './pages/Post';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
   
    <Router> {/* Importamos la libreria de rutas */}
      <Header></Header> {/* Como esta tag esta fuera de las rutas definidas va estar presente sin importar en que ruta estemos */}
      <Routes> {/* Dentro de esta tag vamos a definir nuestras rutas */}
        <Route path='/' element={<Home></Home>}></Route> {/*Definimos nuestra ruta con "path" y el elemento a mostrar con "element"*/}
        <Route path='/sobre' element={<Sobre></Sobre>}></Route>
        <Route path='/posts/:id' element={<Post></Post>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
    </Router>
        
   
  );
}

export default App;
