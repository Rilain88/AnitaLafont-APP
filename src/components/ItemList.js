import './ItemList.css'
import Item from './Item.js'

function ItemList({products}) {
    return(
        <div className='card'>
        { products.map ( product => (
            <Item
            key={product.id}
            {...product} // extension array
            />
          ))
        }

        </div>
    );
}

export default ItemList