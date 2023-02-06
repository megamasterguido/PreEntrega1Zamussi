import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App(){

    let mensaje = `Greetings! (Saludos!)`;

    return (
        <>
            <NavBar/>
            <ItemListContainer mensaje={mensaje}/>
        </>
    );
} 

export default App;