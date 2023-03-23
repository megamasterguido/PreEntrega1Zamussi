import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0)

    const agregarCarrito = (prod, cant) => {
        setCartList([...cartList, {prod: prod, cant: cant}])
        setCartTotal(cartTotal + prod.precio * cant)
    }

    return (
        <CartContext.Provider value = {{cartList, agregarCarrito, setCartList, cartTotal, setCartTotal}}>
            {children}
        </CartContext.Provider>
    )
}