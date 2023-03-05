import productos from "./Productos";

const ItemDetail = (props) => {
    let prod = productos.find(producto => {return props === producto.id})
    return (
        <div className="detalle">
            <h1>{prod.nombre}</h1>
            <img alt="foto" src={prod.foto}/>
            Codigo: {prod.id} <br/>
            Categoria: {prod.categ} <br/>
            Precio: {prod.precio}
        </div>        
    )
}

export default ItemDetail;