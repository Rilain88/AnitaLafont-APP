import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
              <div className="col-md-4">
                  <>
                  {cardFetch.length !==0 && <h1>Name:{cardFetch[0].title}</h1>}
                 </>
               </div>
           </div>
        </div>
    );
}

export default ItemDetail