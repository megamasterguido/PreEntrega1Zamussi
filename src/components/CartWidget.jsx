import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartCounter = () => {
    const {cartList} = useCartContext();
    let cant = cartList.length;
    return(
        <div className="notif_items">
            ITEMS: <span>{cant}</span>
        </div>
    )
}   

const CartCounterItems = () => {
    const {cartList} = useCartContext();
    let cantTotal = 0;
    cartList.forEach(prod => {cantTotal += prod.cant});
    return(
        <div className="notif_total">
            UNIDS: <span>{cantTotal}</span>
        </div>
    )
}   

const CartWidget = () => {

    return (
        <NavLink to="/cart" id="carrito">
            <CartCounter/>
            <img id="carrito_logo" src="https://pic.onlinewebfonts.com/svg/img_208967.png" alt="Logo carrito de compras" />
            <CartCounterItems/>
        </NavLink>
    )
}

export default CartWidget;