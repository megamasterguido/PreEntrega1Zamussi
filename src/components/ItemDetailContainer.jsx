import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import productos from "./Productos";

const ItemDetailContainer = () => {
    let {idProducto} = useParams();
    return (
        ItemDetail(idProducto)
    )
}

export default ItemDetailContainer;