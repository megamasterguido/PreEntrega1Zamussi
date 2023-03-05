import { useParams } from "react-router-dom";
import Card from "./Card";
import productos from "./Productos"

const ItemListContainer = () => {
    const {idCategoria} = useParams();
    let productosFiltrados = [];

    if(idCategoria){
        productosFiltrados = productos.filter(prod => prod.categ === idCategoria)
    }
    else {
        productosFiltrados = productos;
    }
    return (
        <div className="ILC">
            {productosFiltrados.map(Card)}
        </div>
    )
}

export default ItemListContainer;