import { useParams } from "react-router";

const ItemDetailContainer = () => {
    let {idProducto} = useParams();
    console.log(idProducto);
    /*return (
        <>
            <div id={{children}.id}>
                <h1>
                    {{children}.nombre}
                </h1>
                <img src={{children}.foto} alt="" />
                Codigo: {{children}.id} <br/>
                Categoria: {{children}.categ} <br/>
                Precio: {{children}.precio}
            </div>        
            
            <button className="agregarCarrito">
                AGREGAR AL CARRITO
            </button>
        </>
    )*/
}

export default ItemDetailContainer;