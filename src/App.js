import './App.css';
import Navbar from './components/Navbar';
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
        <Route path="/type/:shoesId" element={<ItemListContainer />}></Route>
        <Route path="/item" element={<ItemDetailContainer />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
