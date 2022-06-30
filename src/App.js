import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
