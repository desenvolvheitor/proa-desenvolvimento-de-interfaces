import Style from './css/Grand.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_grand from '../assets/imagens/bandeira_grand.png'

function Grand(){
    return(
        <section className={Style.fundo_grand}>
            <h1>Venha conhecer o Grand Canyon!</h1>
            <ComponenteProps
                lugar="Grand Canyon"
                texto="O Grand Canyon impressiona com sua imensidão monumental, esculpida pelo tempo e pelo rio Colorado. Suas paredes rochosas revelam milhões de anos de história geológica em camadas de cores vibrantes, enquanto o vale profundo oferece vistas de tirar o fôlego. O jogo de luz e sombra ao amanhecer e ao entardecer transforma a paisagem, tornando cada momento uma experiência única e inesquecível."
                bandeira={bandeira_grand}
            />
        </section>
    )
}

export default Grand