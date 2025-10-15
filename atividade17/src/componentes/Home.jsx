import Style from './css/Home.module.css'
import Mala from '../assets/imagens/mala.jpg'

function Home(){
    return(
        <section className={Style.fundo_home}>
            <img src={Mala} alt="Mala de viagens" className={Style.mala_home}/>
            <div className={Style.texto_home}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Realize seus sonhos e explore o mundo com a gente. Oferecemos pacotes completos e personalizados para os destinos mais incríveis, garantindo que sua próxima aventura seja inesquecível e planejada sob medida.</p>
            </div>
        
        </section>
    )
}

export default Home