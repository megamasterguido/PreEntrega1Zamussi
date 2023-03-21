import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartCounter = () => {
    const {cartList} = useCartContext();
    let cant = cartList.length;
    return(
        <div className="notif">
            {cant}
        </div>
    )
}

const CartWidget = () => {

    return (
        <NavLink to="/cart" id="carrito">
            <img id="carrito_logo" src="https://pic.onlinewebfonts.com/svg/img_208967.png" alt="Logo carrito de compras" />
            <CartCounter/>
        </NavLink>
    )
}

export default CartWidget;