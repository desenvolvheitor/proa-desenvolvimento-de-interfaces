import style from './css/Formulario_redes.module.css'

function Formulario_redes(){
    return(
        <section class="formulario_redes">
                <form>
                    <label for="nome">Entre com o seu nome:</label> <br />
                    <input type="text" id="nome" placeholder="Digite seu nome aqui" /> <br />
                    <label for="email">Entre com o seu email:</label> <br />
                    <input type="email" id="email" placeholder="Digite seu email aqui" /> <br />
                    <textarea placeholder="Faça seu pedido por aqui"></textarea> <br />
                    <input type="submit" value="Enviar" class="botao_enviar" />
                </form>
                
                <div class="redes_sociais">
                    <h2>Acesse também nossas redes sociais:</h2>
                    <nav>
                        <a href="#"><img src="./images/whatsapp.png" alt="Whatsapp" /></a>
                        <a href="#"><img src="./images/instagram.png" alt="Instagram" /></a>
                        <a href="#"><img src="./images/facebook.png" alt="Facebook" /></a>
                    </nav>
                </div>
        </section>
    )
}

export default Formulario_redes