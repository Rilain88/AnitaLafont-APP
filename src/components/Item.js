import './Item.css'


function Item ({precio, id, title, thumbnailUrl}) {
    return(
        <div className='card' >
            <div className="row">
              <div className="col-md-4">
                  <img style={{ heigth: 500 , width : 500}} src={thumbnailUrl}/>
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


