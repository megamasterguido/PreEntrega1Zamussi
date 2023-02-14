import { useParams } from "react-router";
import productos from "./Productos";

const ItemDetailContainer = () => {
    let {idProducto} = useParams();
    let prod = productos.find(producto => {return idProducto == producto.id})
    return (
        <>
            <div className="detalle">
                <h1>{prod.nombre}</h1>
                <img src={prod.foto}/>
                Codigo: {prod.id} <br/>
                Categoria: {prod.categ} <br/>
                Precio: {prod.precio}
                <button>
                    AGREGAR AL CARRITO
                </button>
            </div>        
        </>
    )
}

export default ItemDetailContainer;