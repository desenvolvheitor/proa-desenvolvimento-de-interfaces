import style from './css/Footer.module.css'
import imgWhatsapp from '../assets/images/whatsapp.png'
import imgInstagram from '../assets/images/instagram.png'
import imgFacebok from '../assets/images/facebook.png'

function Footer(){
    return(
        <footer>
            <h3>Nossa Loja - Instrumentos Musicais</h3>
            <p>Rua Tito, 54 - Lapa</p>
            <p>São Paulo - Brasil</p>
            <nav>
                <a href="#"><img src={imgWhatsapp} alt="Whatsapp" /></a>
                <a href="#"><img src={imgInstagram} alt="Instagram" /></a>
                <a href="#"><img src={imgFacebok} alt="Facebook" /></a>
            </nav>
        </footer>
    )
}

export default Footer