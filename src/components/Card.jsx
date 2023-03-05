import { Link } from "react-router-dom";

const Card = (props) => {
    return(
        <div className="card" id={props.id}>
            <Link to={`/detalle/${props.id}`}>
                <div className="card_header">{props.id}</div>
                <div className="card_body">
                    <img className="card_img" alt="foto" src={props.foto}/>
                    {props.nombre} <br/>
                    Categoria: {props.categ} <br/>
                    ${props.precio}
                </div>
            </Link>
            <div className="card_footer">
                <input type="number" />
                <button >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Card;