import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import productos from "./Productos";

const ItemDetailContainer = () => {
    let {idProducto} = useParams();
    let prod = productos.find(producto => {return idProducto == producto.id})
    return (
        ItemDetail(idProducto)
    )
}

export default ItemDetailContainer;