import { useState, useEffect } from "react"; 
import{ getproducts } from "../services";
import ItemList from "./ItemList";

const ItemListContainer =() => {
    const {items, setItems} = useState([]);
    useEffect(() => {
        getproducts().then(response => {
            setItems(response.data);
        });
    }, []);


    return <ItemList items={[items]}/>;
};

export default ItemListContainer;