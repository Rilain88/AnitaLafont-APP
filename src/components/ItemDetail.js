import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetail.css'


function ItemDetail ({precio, id, title, thumbnailUrl, description}) {

    const params = useParams()
    const  [cardFetch, setCardFetch] = useState([])

   

    const fetchCard = () => {
        fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
            setCardFetch(data)
    })
}

    useEffect(() => {
        fetchCard()
    }, [])


    return(
        <div className='card' >
            <div className="row">
              <div className="col-md-12">
                  <>
                  {cardFetch.length !==0 && <h3>Name: {cardFetch[0].title}</h3>}
                  {cardFetch.length !==0 && <h1>Tipo: {cardFetch[0].type}</h1>}
                  {cardFetch.length !==0 && <h1>Material: {cardFetch[0].description}</h1>}
                  {cardFetch.length !==0 && <img style={{ heigth: 350 , width : 350}} src={cardFetch[0].thumbnailUrl}/>}
                 </>
               </div>
               
           </div>
        </div>
    );
}

export default ItemDetail