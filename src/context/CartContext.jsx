import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const agregarCarrito = (prod, cant) => {
        setCartList([...cartList, {prod: prod, cant: cant}])
    }

    return (
        <CartContext.Provider value = {{cartList, agregarCarrito, setCartList}}>
            {children}
        </CartContext.Provider>
    )
}