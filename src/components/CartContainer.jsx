import {useState } from "react";
import { useCartContext } from "../context/CartContext";

const CartTotal = () => {
    const {cartTotal} = useCartContext();

    return(
        <div className="totalCarrito">
            TOTAL: ${cartTotal}
        </div>
    )
}

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

const DisplayCant = ({props}) => {
    let [cant, setCant] = useState(props.cant)
    const {cartList, setCartList, cartTotal, setCartTotal} = useCartContext();
    
    const eliminarCarrito = () => {
        setCartList(cartList.filter(p => !(p === props)))
        setCartTotal(cartTotal-Number(props.prod.precio)*props.cant)
    }

    const sumarCarrito = () => {
        if(cant+1 <= props.prod.stock){
            props.cant++
            setCant(cant+1)
            setCartTotal(cartTotal+Number(props.prod.precio))
        }
        else{
            alert("No se pueden sumar mas unidades")
        }
    }
    const restarCarrito = () => {
        if(cant-1 > 0){
            props.cant--
            setCant(cant-1)
            setCartTotal(cartTotal-Number(props.prod.precio))
        }
        else{
            eliminarCarrito();
        }
    }

    return(
        <>
        <button className="carrito-" onClick={restarCarrito}>-</button>
        {cant}
        <button className="carrito+" onClick={sumarCarrito}>+</button>
        <button className="carritoX" onClick={eliminarCarrito}>X</button>
        </>
    )
}

const CartItem = (props) => {
    let prod = props.prod

    return(
        <div className="carrito_item">
            <img src={prod.foto} className="carrito_icono" alt="icono"/>
            <span className="carrito_cod">{prod.id}</span>   
            <span className="carrito_titulo">{prod.nombre}</span>
            <span className="carrito_precio">${prod.precio}</span>
            <span className="carrito_cant">
                <DisplayCant props={props}/>
            </span>
        </div>
    )
}

export const CartContainer = () => {
    
    const {cartList} = useCartContext();

    return (
        <div className="carrito">
            {cartList.map(CartItem)}
            <BorrarCarrito/>
            <CartTotal/>
        </div>
    )
}