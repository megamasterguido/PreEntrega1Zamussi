import {useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../Firestore";

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
        <div  className="carrito_item">
            <Link to={`/detalle/${prod.id}`}>

            <img src={require(""+prod.foto)} className="carrito_icono" alt="icono"/>
            </Link>
            <span className="carrito_cod">{prod.id}</span>   
            <span className="carrito_titulo">{prod.nombre}</span>
            <span className="carrito_precio">${prod.precio}</span>
            <span className="carrito_cant">
                <DisplayCant props={props}/>
            </span>
        </div>
    )
}

const CartVolver = () => {
    return(
        <div className="carritoVacio">
            ¿El carrito se encuentra vacio. Desea volver a la pantalla principal para agregar elementos?
            <Link to={"/"}>
                <button> VOLVER </button>
            </Link>
        </div>
    )

}

const CartFormulario = () => {
    const [cliente, setCliente] = useState({})
    const {cartTotal, cartList, setCartList, setCartTotal} = useCartContext();
    const db = getFirestore(app)
    const col = collection(db, "orders")

    const clienteHandler = (evento) => {
        setCliente({
            ...cliente,
            [evento.target.name]: evento.target.value
        })
    }
    
    async function comprar(){
        if(cliente.nombre !== undefined && cliente.telefono !== undefined && cliente.mail !== undefined){
            const buyer = {nombre: cliente.nombre, telefono: cliente.telefono, mail: cliente.mail}
            const order = cartList.map(item => ({id: item.prod.id, nombre: item.prod.nombre, precio: item.prod.precio}))
            const pedido = {
                comprador: buyer,
                orden: order,
                total: cartTotal
            }
            await addDoc(col, pedido).then(resp=>alert("Su ID de transaccion es: " + resp.id)).catch(err=>console.error(err))
            setCartList([])
            setCartTotal(0)
        }
        else{
            alert("Complete todos los datos del formulario para poder confirmar la compra")
        }
    }

    return(
        <div className="carrito_form">

            <form id="formularioCliente">
                <label htmlFor="nombre">Nombre y apellido</label>
                <input onChange={clienteHandler} type="text" name="nombre" value={cliente.nombre}/>
                <label htmlFor="telefono">Telefono</label>
                <input onChange={clienteHandler} type="text" name="telefono" value={cliente.telefono}/>
                <label htmlFor="mail">Correo Electronico</label>
                <input onChange={clienteHandler} type="text" name="mail" value={cliente.mail}/>
            </form>
            <button type="submit" className="comprarCarrito" onClick={comprar}>Finalizar Pedido</button>
        </div>
    )
}

export const CartContainer = () => {
    
    const {cartList} = useCartContext();

    if(cartList.length === 0){
        return(
            <div className="carrito">
                    <CartVolver/>
            </div>
        )
    }
    else{
        return (
            <div className="carrito">
                {cartList.map(CartItem)}
                <div className="resumenCarrito">
                    <span>
                        <BorrarCarrito/>
                        <CartTotal/> 
                    </span>
                        <CartFormulario/>
                </div>
            </div>
        )

    }

}