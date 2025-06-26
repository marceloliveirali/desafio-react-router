import { NavLink } from "react-router-dom";

import './styles.css';

function Header() 
{
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><NavLink className="link" to="/">Início</NavLink></li>
                            <li><NavLink className="link" to="/product">Produtos</NavLink></li>
                            <li><NavLink className="link" to="/about">Sobre nós</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <img src="/public/img/house.png" alt="Home" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;