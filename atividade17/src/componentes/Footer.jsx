import Style from './css/Footer.module.css'
import logo_instagram from '../assets/imagens/insta.jfif'
import logo_facebook from '../assets/imagens/face.jfif'
import logo_tiktok from '../assets/imagens/tiktok.png'
import logo_whatsapp from '../assets/imagens/whtas.png'

function Footer(){
    return(
        <footer className={Style.fundo_footer}>
            <p>Siga-nos em nossas redes sociais</p>
            <nav className={Style.redes_sociais}>
                <a href="#">
                    <img src={logo_instagram} alt="Logo do Instagram"/>
                    </a>
                <a href="#">
                    <img src={logo_facebook} alt="Logo do Facebook"/>
                    </a>
                <a href="#">
                    <img src={logo_tiktok} alt="Logo do Tiktok"/>
                    </a>
                <a href="#">
                    <img src={logo_whatsapp} alt="Logo do Whatsapp"/>
                    </a>
            </nav>
            <p>Telefone de contato: (11) 9555 - 3355</p>
        </footer>
    )
}

export default Footer