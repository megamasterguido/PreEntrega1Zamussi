import CartWidget from "./CartWidget";
import logo from "./images/logo_argdev.png";

function BotonNavBar(nombre, link){
    this.nombre = nombre;
    this.link = link;
}

const BotonNav = (boton) => {
    return(
        <li>
            <a href={boton.link}>{boton.nombre}</a>
        </li>
    )
}

const NavBar = (props) => {
    let botones = [new BotonNavBar("Repuestos", "#r"), new BotonNavBar("Electrodomesticos", "#e"), new BotonNavBar("Contacto", "#c"), new BotonNavBar("Acerca de nosotros", "#adn")]  ;
    return (
        <nav>
            <a href="#i">
                <img id="logo" src={logo} alt="Logo de Argdev" />
            </a>
            <ul>
                {botones.map(BotonNav)}
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;