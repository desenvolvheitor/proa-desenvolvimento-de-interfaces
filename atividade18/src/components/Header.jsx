import style from './css/Header.module.css'

function Header(){
    return(
        <header>
            <nav className={style.nav_header}>
                <a href="#" className={style.link_nav_header}>Home</a>
                <a href="#" className={style.link_nav_header}>Quem Somos</a>
                <a href="#" className={style.link_nav_header}>Instrumentos</a>
                <a href="#" className={style.link_nav_header}>Endereço</a>
                <a href="#" className={style.link_nav_header}>Contato</a>
            </nav>
        </header>
    )
}

export default Header