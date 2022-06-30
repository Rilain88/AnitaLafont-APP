import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import ItemCount from './ItemCount.js';
import './ItemListContainer.css'

function ItemListContainer() {

  const [info, setInfo] = useState ([])

  function onAdd(cantidad) {
    console.log(cantidad)
  }
  useEffect(()=>{
    fetch('data.json') // trae la info del response comppleto
    .then((resp) => resp.json()) // Extrae la info a utilizar del Response
    .then((data) => setInfo(data)) // Setea esa info para nuestro State
  }, {})

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
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </section>
  );
}

export default ItemListContainer;