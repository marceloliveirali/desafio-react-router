import { NavLink } from "react-router-dom";

import './styles.css';
import { Link } from "react-router-dom";

function Header() 
{
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="/home">Início</NavLink></li>
                            <li><NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="/products">Produtos</NavLink></li>
                            <li><NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="/about">Sobre nós</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <Link to="/"><img src="/public/img/house.png" alt="Home" /></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;