import { useEffect, useState } from "react";
import { ItemQuantitySelector } from "./ItemQuantitySelector";

const ItemDetail = ({prod}) => {

    const [foto, setFoto] = useState("./images/no_preview.png")
    
    useEffect(() => {
        let fotoReact = foto
        if(typeof(prod.foto) != "undefined"){
            fotoReact = prod.foto
        }
        setFoto(fotoReact)
    }, [foto, prod.foto])

    return (
        <div className="detalle">
            <h1>{prod.nombre}</h1>
            <img alt="foto" src={require("" + foto)}/>
            Codigo: {prod.id} <br/>
            Categoria: {prod.categ} <br/>
            Precio: {prod.precio}
            <ItemQuantitySelector props={prod}/>
        </div>        
    )
}

export default ItemDetail;