import Style from './css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_aruba from '../assets/imagens/bandeira_aruba.png'

function Aruba(){
    return(
        <section className={Style.fundo_aruba}>
            <h1>Venha conhecer a Aruba!</h1>
            <ComponenteProps
                lugar="Aruba"
                texto="Aruba seduz com suas praias de areia branca e águas cristalinas em tons de azul-turquesa. A ilha revela um paraíso caribenho, onde o sol brilha o ano todo e os ventos alísios amenizam o calor. A hospitalidade local e a mistura de culturas criam uma atmosfera alegre e acolhedora, enquanto a vida marinha colorida convida a aventuras subaquáticas memoráveis."
                bandeira={bandeira_aruba}
            />
        </section>
    )
}

export default Aruba