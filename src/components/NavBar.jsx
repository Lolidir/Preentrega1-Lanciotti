import CartWidget from "./CartWidget"
import './navbar.css'
const NavBar = () => {


    return (
        <nav>
            <div>
                <h1>Ecommerce Construccion</h1>
            </div>

            <ul>
                <li>Hierro y acero</li>
                <li>Hormigón</li>
                <li>Madera</li>
                <li>Aberturas</li>

                <CartWidget />

            </ul>
        </nav>


    )
}

export default NavBar