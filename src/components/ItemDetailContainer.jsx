import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    let {idProducto} = useParams();
    return (
        ItemDetail(idProducto)
    )
}

export default ItemDetailContainer;