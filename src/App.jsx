import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App(){

    let mensaje = `Greetings! (¡Felicidades!)`;

    return (
        <div>
            <NavBar/>
            <ItemListContainer mensaje={mensaje}/>
        </div>
    );
} 

export default App;