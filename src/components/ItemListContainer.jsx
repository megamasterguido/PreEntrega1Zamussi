const ItemListContainer = (greeting) => {
    return (
        <li className="itemListContainer">
            {greeting.mensaje}
        </li>
    )
}

export default ItemListContainer;