import Card from "./Card";

const ItemList = ({productos}) => {

    return (
        <div className="ItemList">
            {productos.map(Card)}
        </div>
    )
}

export default ItemList;