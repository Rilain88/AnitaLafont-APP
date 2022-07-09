import './Item.css'
import {Link} from 'react-router-dom'; 


function Item ({precio, id, title, thumbnailUrl})  {
    return(

        

        <div className='card' >
            <div className="row">
              <div className="row-md-12">
                    <h3 className='card-title text-secondary'> {title}</h3>
                    <hr/>
                    <hr/>
                   <p>{id}</p>
                   <p> $ {precio}</p>
               </div>
           </div>
                <Link to={`/Item?${id}`}>
                <button onClick={""}>Mas info.</button>
                </Link>
        </div>
        
    );
}

export default Item


