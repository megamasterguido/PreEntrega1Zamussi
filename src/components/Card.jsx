import { Link } from "react-router-dom";
import { ItemQuantitySelector } from "./ItemQuantitySelector";

const Card = (props) => {
    
    let cod = props.id;
    let foto = props.foto
    return(
        <div className="card" id={cod}>
            <Link to={`/detalle/${cod}`}>
                <div className="card_header">{cod}</div>
                <div className="card_body">
                    <img className="card_img" alt="foto" src={require("" + foto)}/>
                    {props.nombre} <br/>
                    Categoria: {props.categ} <br/>
                    ${props.precio}
                </div>
            </Link>
            <div className="card_footer">
                <ItemQuantitySelector props = {props}/>
            </div>
        </div>
    )
}

export default Card;