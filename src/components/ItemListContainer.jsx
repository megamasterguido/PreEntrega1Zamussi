const ItemListContainer = (greeting) => {
    return (
        <li className={greeting.clase}>
            {greeting.mensaje}
        </li>
    )
}

export default ItemListContainer;