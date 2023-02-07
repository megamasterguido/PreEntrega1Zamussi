import no_preview from "./images/no_preview.png"

function Producto (id, nombre, categ, precio, foto=no_preview){
    this.id = id;
    this.nombre = nombre;
    this.categ = categ;
    this.precio = precio;
    this.foto = foto;
} 

const Card = (props) => {
    return(
        <a href={props.id} className="card" id={props.id}>
            <div className="card_header">{props.id}</div>
            <div className="card_body">
                <img className="card_img" src={props.foto}/>
                {props.nombre} <br/>
                Categoria: {props.categ} <br/>
                Precio: {props.precio}
            </div>
            <div className="card_footer">
                <button className="agregarCarrito">
                    AGREGAR AL CARRITO
                </button>
            </div>
        </a>
    )
}

const ItemListContainer = () => {
    let productos = [new Producto("1718", "Eje Drean", "Lavarropas", "4900"),
                    new Producto("1719", "Eje Drean Copia", "Lavarropas", "2900"),
                    new Producto("2082", "Forzador de Unidad Exterior", "Aires Acondicionados", "13000"),
                    new Producto("10219", "Forzador de Unidad Interior", "Aires Acondicionados", "11500")];
    return (
        <div className="ILC">
            {productos.map(Card)}
        </div>
    )
}

export default ItemListContainer;