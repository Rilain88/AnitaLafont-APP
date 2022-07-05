import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

const [info, setInfo] = useState ([])
 
  useEffect(()=>{
    fetch('data.json') // trae la info del response comppleto
    .then((resp) => resp.json()) // Extrae la info a utilizar del Response
    .then((data) => setInfo(data)) // Setea esa info para nuestro State
    .catch(err => console.log(err))
  }, [])

  return (
    <section className='cuerpo'>
      <div className='catalogo'>
       <ItemDetail  products={info}/>
      </div>
    </section>
  );
}

export default ItemDetailContainer;