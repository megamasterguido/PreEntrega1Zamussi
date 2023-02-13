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
                <Route exact path="/categoty" element={<ItemListContainer />}/>
                <Route exact path="/" element={<ItemDetailContainer></ItemDetailContainer>}/>
            </Routes>
        </BrowserRouter>
    );
} 

export default App;