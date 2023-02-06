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
    let botones = [new BotonNavBar("Repuestos", "#r"), new BotonNavBar("Electrodomesticos", "#e"), new BotonNavBar("Herramientas", "#h")]  ;
    return (
        <nav>
            <a href="#i">
                <img id="logo" src="https://media.licdn.com/dms/image/C4D0BAQHQr932nRR5CQ/company-logo_200_200/0/1526477837127?e=1683763200&v=beta&t=4owibNFCWUWzgfUn7A3cYlhUHV66XpAPp11ZvFb4aOg" alt="Logo de Argdev" />
            </a>
            <ul>
                {botones.map(BotonNav)}
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;