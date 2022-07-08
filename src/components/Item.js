import './Item.css'
import {Link} from 'react-router-dom'; 


function Item ({precio, id, title, thumbnailUrl})  {
    return(

        <Link to={`/Item?${id}`}>

        <div className='card' >
            <div className="row">
              <div className="col-md-4">
                  <img style={{ heigth: 350 , width : 350}} src={thumbnailUrl}/>
                    <hr/>
                    <hr/>
                   <h3 className='card-title text-secondary'> {title}</h3>
                   <p>{id}</p>
               </div>
           </div>
                <button onClick={""}>Mas info.</button>
        </div>
        </Link>
    );
}

export default Item


