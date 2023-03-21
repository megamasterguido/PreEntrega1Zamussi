import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer";
import ItemDetail from "./components/ItemDetail";


function App(){
    return (
        <BrowserRouter>
            <CartContextProvider>   
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />}/>
                    <Route exact path="/categoria/:idCategoria" element={<ItemListContainer />}/>
                    <Route exact path="/detalle/:idProducto" element={<ItemDetail />}/>
                    <Route exact path="/cart" element={<CartContainer/>}/>
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
} 

export default App;