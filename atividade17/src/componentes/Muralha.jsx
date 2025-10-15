import Style from './css/Muralha.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_china from '../assets/imagens/bandeira_china.png'

function Muralha(){
    return(
        <section className={Style.fundo_muralha}>
            <h1>Venha conhecer a Muralha da China!</h1>
            <ComponenteProps
                lugar="Muralha da China"    
                texto="A Muralha da China fascina por sua grandiosidade histórica, serpenteando por montanhas e vales a perder de vista. Suas torres de vigia e fortificações milenares contam a história de dinastias e impérios, revelando uma engenhosidade impressionante. O cenário ao redor, que varia de desertos a florestas, confere uma beleza dramática à estrutura, tornando cada passo uma jornada pelo tempo."
                bandeira={bandeira_china}
            />
        </section>
    )
}

export default Muralha