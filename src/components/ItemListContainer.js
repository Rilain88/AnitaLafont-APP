import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import './ItemListContainer.css'

function ItemListContainer() {

const [info, setInfo] = useState ([])
 
  useEffect(()=>{
    fetch('data.json') // trae la info del response comppleto
    .then((resp) => resp.json()) // Extrae la info a utilizar del Response
    .then((data) => setInfo(data)) // Setea esa info para nuestro State
    .catch(err => console.log(err))
  }, [info])

  return (

    
    <section className='cuerpo'>
      <div>
        <h3>Catálogo de productos</h3>
        <p>Elegí tus productos de esta lista...</p>
      </div>
    <hr/>
    <hr/>
      <div className='catalogo'>
       <ItemList  products={info}/>
      </div>
     
    </section>
  );
}

export default ItemListContainer;