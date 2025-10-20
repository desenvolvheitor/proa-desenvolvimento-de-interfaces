import style from './css/Apresentacao_loja2.module.css'

function Apresentacao_loja2(){
    return(
        <section className={style.apresentacao_loja2}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122569257646!2d-46.69439032388191!3d-23.528093578822727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef87505aee2fb%3A0xcdf6c5070269884e!2sR.%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005051-000!5e0!3m2!1spt-BR!2sbr!4v1760022808586!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <article className={style.nossa_loja}>
                <h1>Nossa Loja - Instrumentos Musicais</h1>
                <p>Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m², com uma variada gama de instrumentos, em um ambiente agradável para toda a família!</p>
            </article>
        </section>
    )
}

export default Apresentacao_loja2