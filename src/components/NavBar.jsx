import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function BotonNavBar(nombre, link){
    this.nombre = nombre;
    this.link = link;
}

const BotonNav = (boton) => {
    return(
        <li>
            <NavLink to={boton.link}>{boton.nombre}</NavLink>
        </li>
    )
}

const NavBar = () => {
    let botones = [new BotonNavBar("Repuestos", "/categoria/Repuestos"), new BotonNavBar("Electrodomesticos", "/categoria/Electro"), new BotonNavBar("Herramientas", "/categoria/Herramientas")];
    return (
        <nav>
            <NavLink to="/">
                <img id="logo" src="https://media.licdn.com/dms/image/C4D0BAQHQr932nRR5CQ/company-logo_200_200/0/1526477837127?e=1683763200&v=beta&t=4owibNFCWUWzgfUn7A3cYlhUHV66XpAPp11ZvFb4aOg" alt="Logo de Service italia" />
            </NavLink>
            <ul>
                {botones.map(BotonNav)}
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;