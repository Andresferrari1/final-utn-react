
import './Layout.css';
import "boxicons/css/boxicons.min.css"; 
import { Link } from "react-router-dom";

const Layout = (props) => {
return (
    <div className="layout-container"> 
    <header>
        <img src="public/assets/logo_pokemon.png" alt="logo de pagina"/>                                                                                                                                                                                                                                                                 
        <nav>
        <ul>
            <li><Link to="/">Inicio</Link><i className="bx bxs-home"></i></li>
            <li><Link to="/pokedex">Pokedex</Link><i className="bx bxs-joystick"></i> </li>
            <li><Link to="/contacto">Contacto</Link><i className="bx bxs-phone-call"></i> </li>
        </ul>
        </nav>
    </header>

    <main>
        {props.children}
    </main>

    <footer>
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
    </div>
);
}

export { Layout };