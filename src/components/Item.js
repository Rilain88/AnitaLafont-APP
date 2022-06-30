import './Item.css'


function Item ({precio, id, title, thumbnailUrl}) {
    return(
        <div className='container'>
            <div className="row">
              <div className="col-md-4">
                  <img src={thumbnailUrl}/>
                    <hr/>
                    <hr/>
                   <h3 className='card-title text-secondary'> {title}</h3>
                   <p>{precio}</p>
               </div>
           </div>
        <button onClick={""}>Mas info.</button>
        </div>
    );
}

export default Item


