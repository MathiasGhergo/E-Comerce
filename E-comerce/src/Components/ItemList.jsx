import propTypes from "prop-types";

const ItemList =({items}) => {
    return ( 
    <div>
        <h1>Perfumes</h1>
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>${item.precio}</p> 
                  <p>{item.category}</p> 
                </li>
            ))}
        </ul>
    </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
};

export default ItemList;