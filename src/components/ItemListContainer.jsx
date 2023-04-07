import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../Firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const {idCategoria} = useParams();
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db = getFirestore(app)
        let col = []
        if(idCategoria){
            col = query(collection(db, "productos"), where("categ", "==", idCategoria))
        }
        else{
            col = collection(db, "productos")
        }

        getDocs(col).then(coldb => setProductos(coldb.docs.map(doc => ({id:doc.id, ...doc.data()})))).catch(err => console.error(err))
    },[idCategoria])


    return (
        <ItemList productos={productos}/>
    )
}

export default ItemListContainer;