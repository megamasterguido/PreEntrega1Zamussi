import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const BorrarCarrito = () =>{
    const {cartList, setCartList} = useCartContext();

    const eliminarTodo = () => {
        let carritoVacio = cartList.filter(() => false)
        setCartList(carritoVacio)
    }

    return(
        <button className="borrarCarrito" onClick={eliminarTodo}>Borrar Carrito</button>
    )
}

const CartItem = (props) => {
    let prod = props.prod
    let [cant, setCant] = useState(props.cant)
    const {cartList, setCartList} = useCartContext();
    
    const eliminarCarrito = () => {
        setCartList(cartList.filter(p => !(p === props)))
    }

    const sumarCarrito = () => {
        if(cant+1 <= prod.stock){
            props.cant++
            setCant(props.cant);
        }
        else{
            alert("No se pueden sumar mas unidades")
        }
    }

    const restarCarrito = () => {
        if(cant-1 > 0){
            props.cant--
            setCant(props.cant);
        }
        else{
            eliminarCarrito();
        }
    }

    return(
        <div className="carrito_item">
            <img src={prod.foto} className="carrito_icono"/>
            <span className="carrito_cod">{prod.id}</span>   
            <span className="carrito_titulo">{prod.nombre}</span>
            <span className="carrito_precio">${prod.precio}</span>
            <span className="carrito_cant">
                <button className="carrito-" onClick={restarCarrito}>-</button>
                {cant}
                <button className="carrito+" onClick={sumarCarrito}>+</button>
                <button className="carritoX" onClick={eliminarCarrito}>X</button>
            </span>
        </div>
    )
}

export const CartContainer = () => {
    
    const {cartList} = useCartContext();

    let total = 0

    cartList.forEach(element => {total += element.prod.precio * element.cant});

    return (
        <div className="carrito">
            {cartList.map(CartItem)}
            <BorrarCarrito/>
            <div className="totalCarrito">
                TOTAL: ${total}
            </div>
        </div>
    )
}