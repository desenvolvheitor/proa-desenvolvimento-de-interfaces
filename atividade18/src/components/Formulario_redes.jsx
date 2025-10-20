import style from './css/Formulario_redes.module.css'
import imgWhatsapp from '../assets/images/whatsapp.png'
import imgInstagram from '../assets/images/instagram.png'
import imgFacebok from '../assets/images/facebook.png'

function Formulario_redes(){
    return(
        <section className={style.formulario_redes}>
                <form>
                    <label for="nome">Entre com o seu nome:</label> <br />
                    <input type="text" id="nome" placeholder="Digite seu nome aqui" /> <br />
                    <label for="email">Entre com o seu email:</label> <br />
                    <input type="email" id="email" placeholder="Digite seu email aqui" /> <br />
                    <textarea placeholder="Faça seu pedido por aqui"></textarea> <br />
                    <input type="submit" value="Enviar" className={style.botao_enviar} />
                </form>
                
                <div className={style.redes_sociais}>
                    <h2>Acesse também nossas redes sociais:</h2>
                    <nav>
                        <a href="#"><img src={imgWhatsapp} alt="Whatsapp" /></a>
                        <a href="#"><img src={imgInstagram} alt="Instagram" /></a>
                        <a href="#"><img src={imgFacebok} alt="Facebook" /></a>
                    </nav>
                </div>
        </section>
    )
}

export default Formulario_redes