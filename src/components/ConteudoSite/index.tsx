import { Link } from 'react-router-dom';
import './styles.css';

function ConteudoSite() 
{
    return (
        <>
            <div className='product'>
                <div className='container adjustContainer'>
                    <ul>
                        <li><Link className='link adjustLink' to="/products/computers">Computadores</Link></li>
                        <li><Link className='link adjustLink' to="/products/eletronics">Eletrônicos</Link></li>
                        <li><Link className='link adjustLink' to="/products/books">Livro</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ConteudoSite;