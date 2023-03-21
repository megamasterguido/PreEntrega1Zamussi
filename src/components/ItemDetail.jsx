import { useParams } from "react-router-dom";
import { ItemQuantitySelector } from "./ItemQuantitySelector";
import productos from "./Productos";

const ItemDetail = () => {
    let {idProducto} = useParams();
    let prod = productos.find(producto => {return idProducto === producto.id})

    return (
        <div className="detalle">
            <h1>{prod.nombre}</h1>
            <img alt="foto" src={prod.foto}/>
            Codigo: {prod.id} <br/>
            Categoria: {prod.categ} <br/>
            Precio: {prod.precio}
            <ItemQuantitySelector props={prod}/>
        </div>        
    )
}

export default ItemDetail;