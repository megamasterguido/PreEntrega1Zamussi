import { NavLink } from "react-router-dom";

const CartWidget = (props) => {
    return (
        <NavLink to="/cart" id="carrito">
            <img id="carrito_logo" src="https://pic.onlinewebfonts.com/svg/img_208967.png" alt="Logo carrito de compras" />
            <span className="notif">
                0
            </span>
        </NavLink>
    )
}

export default CartWidget;