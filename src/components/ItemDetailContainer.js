import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

  const  [cardFetch, setCardFetch] = useState([])
 
  useEffect(()=>{
    fetch('data.json') // trae la info del response comppleto
    .then((resp) => resp.json()) // Extrae la info a utilizar del Response
    .then((data) => setCardFetch(data)) // Setea esa info para nuestro State
    .catch(err => console.log(err))
  }, [])

  return (
    <section className='cuerpo'>
      <div className='catalogo'>
       <ItemDetail  {...cardFetch}/>
      </div>
    </section>
  );
}

export default ItemDetailContainer;