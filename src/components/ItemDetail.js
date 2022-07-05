


function ItemDetail ({precio, id, title, thumbnailUrl, description}) {
    return(
        <div className='card' >
            <div className="row">
              <div className="col-md-4">
                  <img style={{ heigth: 250 , width : 250}} src={thumbnailUrl}/>
                    <hr/>
                   <p>{precio}</p>
                   <p>{description}</p>
               </div>
           </div>
        </div>
    );
}

export default ItemDetail