import { useState } from "react";
import { useCartContext } from "../context/CartContext";

export const ItemQuantitySelector = ({props}) => {
    const {cartList, agregarCarrito, cartTotal, setCartTotal} = useCartContext();
    
    let [cant, setCant] = useState(0);
    let maxUni = props.stock;
    let cod = props.id;
    
    let prodEnCarrito = cartList.find(obj => obj.prod.id === cod);
    
    const inputHandler = (evento) => {
        setCant(parseInt(evento.target.value))
    }

    const clickHandler = () => {
        if(cant > maxUni){
            alert("No hay tantas unidades en stock de este producto.")
        }
        else if(!Number.isInteger(cant)){
            alert("No pueden agregarse unidades con decimales al carrito.")
        }
        else if(cant <= 0){
            alert("No pueden agregarse unidades negativas o nulas al carrito.")
        }
        else if(prodEnCarrito){
            if(prodEnCarrito.cant + cant > maxUni){
                alert("No se pueden agragar tantas unidades a las que ya hay en el carrito")
            }
            else{
                prodEnCarrito.cant += cant;
                setCartTotal(cartTotal + props.precio * cant)
            }
        }
        else{
            agregarCarrito(props, cant);
        }
    }

    return(
        <>
            <input placeholder="0" type="number" min="0" step="1" max={props.stock} onInput={inputHandler}/>
            <button onClick={clickHandler}>Agregar</button>
        </>
    )
}