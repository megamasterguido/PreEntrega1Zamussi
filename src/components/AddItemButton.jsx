import { useCartContext } from "../context/CartContext";

export const AddItemButton = ({props}, cant) => {
    const {cartList, agregarCarrito} = useCartContext();
    
    let maxUni = props.stock;
    let cod = props.id;
    let prodEnCarrito = cartList.find(obj => obj.prod.id === cod);

    const clickHandler = () => {
        console.log(props, cant)
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
            }
        }
        else{
            agregarCarrito(props, cant);
        }
    }

    return (
        <button onClick={clickHandler}>Agregar</button>
    )
}