import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home/Home';
import Nosotros from './components/Pages/Nosotros/Nosotros'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';
import NotFound from './components/Pages/NotFound';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/type/:shoesId" element={<ItemDetailContainer />}></Route>
        <Route path="/Item" element={<ItemDetailContainer />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Nosotros" element={<Nosotros />}></Route>
        
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
