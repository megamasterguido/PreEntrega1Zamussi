import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer"

function App(){
    return (
        <BrowserRouter>
            <NavBar/>
            <ItemListContainer/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />}/>
                <Route exact path="/categoria/:idCategoria" element={<ItemListContainer />}/>
                <Route exact path="/detalle/:idProducto" element={<ItemDetailContainer />}/>
            </Routes>
        </BrowserRouter>
    );
} 

export default App;