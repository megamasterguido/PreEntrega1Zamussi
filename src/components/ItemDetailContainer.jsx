import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../Firestore";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    let {idProducto} = useParams();
    const [producto, setProducto] = useState({})

    useEffect(() => {
        const db = getFirestore(app)
        getDoc(doc(db, "productos", idProducto)).then(resp => setProducto({ id: resp.id, ...resp.data()})).catch(err => console.error(err))
    }, [idProducto])
    
    return (
        <ItemDetail prod = {producto}/>
    )
}

export default ItemDetailContainer;