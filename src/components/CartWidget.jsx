const CartWidget = (props) => {
    return (
        <a id="carrito" href="#cart">
            <img id="carrito_logo" src="https://pic.onlinewebfonts.com/svg/img_208967.png" alt="Logo carrito de compras" />
            <span className="notif">
                0
            </span>
        </a>
    )
}

export default CartWidget;