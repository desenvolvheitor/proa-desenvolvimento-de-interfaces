import {Link} from 'react-router-dom'
import Style from './css/Header.module.css'
import Logo from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/lupa.png'

function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo" className={Style.img_viagens}/>
            <nav className={Style.menu_header}>
                <Link to="/">Home</Link>
                <Link to="/Escocia">Escócia</Link>
                <Link to="/Grand">Grand Canyon</Link>
                <Link to="/Muralha">Muralha da China</Link>
                <Link to="/Aruba">Aruba</Link>
            </nav>

            <div className={Style.busca}>
                <input type="search"/>
            </div>

            <img src={Lupa} alt="Lupinha" className={Style.lupa} />
        </header>
    )
}

export default Header