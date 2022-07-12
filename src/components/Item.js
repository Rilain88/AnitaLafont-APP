import './Item.css'
import {Link} from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount.js';

function Item ({precio, id, type, title, thumbnailUrl})  {

    const [info, setInfo] = useState ([])
 

    function onAdd(cantidad) {
      console.log(cantidad)
    }
    useEffect(()=>{
      fetch('data.json') // trae la info del response comppleto
      .then((resp) => resp.json()) // Extrae la info a utilizar del Response
      .then((data) => setInfo(data)) // Setea esa info para nuestro State
      .catch(err => console.log(err))
    }, [info])


    return(
        <div className='card' >
            <div className="row">
              <div className="col-md-12">
                    <span>
                    <img src={thumbnailUrl} alt={""}  heigth="125" width="150"/>
                    </span>
                    <h3 className='card-title text-secondary'> {title}</h3>
                    <hr/>
                   <p> $ {precio}</p>
               </div>
                   <Link to={`/Item?${id}`}>
                     <button onClick={""}>Mas info.</button>
                    </Link>

                   <hr/>
                   <hr/> 
           </div>
                 <ItemCount stock={10} initial={0} onAdd={onAdd}/>
        </div> 
    );
}

export default Item


