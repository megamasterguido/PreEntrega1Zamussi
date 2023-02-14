import { Link } from "react-router-dom";

const Card = (props) => {
    return(
    <Link to={`/detalle/${props.id}`}>
        <div className="card" id={props.id}>
            <a href={props.id}>
                <div className="card_header">{props.id}</div>
                <div className="card_body">
                    <img className="card_img" src={props.foto}/>
                    {props.nombre} <br/>
                    Categoria: {props.categ} <br/>
                    Precio: {props.precio}
                </div>
            </a>
            <div className="card_footer">
                <button className="agregarCarrito">
                    AGREGAR AL CARRITO
                </button>
            </div>
        </div>
    </Link>
        
    )
}

export default Card;