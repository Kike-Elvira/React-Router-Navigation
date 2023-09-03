import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home';
import Page404 from './pages/Page.404';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
   
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/sobre' element={<Sobre></Sobre>}></Route>
            <Route path='*' element={<Page404></Page404>}></Route>
          </Routes>
        </Router>
        
   
  );
}

export default App;
