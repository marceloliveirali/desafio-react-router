import { NavLink } from 'react-router-dom';
import './styles.css';

function ConteudoSite() 
{
    return (
        <>
            <div className='product'>
                <nav className='container adjustContainer'>
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? "sub_menu-item sub_menu-active" : "sub_menu-item"} to="/products/computers">Computadores</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "sub_menu-item sub_menu-active" : "sub_menu-item"} to="/products/eletronics">Eletrônicos</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "sub_menu-item sub_menu-active" : "sub_menu-item"} to="/products/books">Livro</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default ConteudoSite;