import style from './css/Lista_produtos.module.css'
import imgViolao from '../assets/images/violao.jpg'

function Lista_produtos(){
    return(
        <section className={style.lista_produtos}>
            <div className={style.produto}>
                <img src={imgViolao} alt="Violão" className={style.img_produto} />
                <p className={style.nome_produto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p className={style.preco_produto}><strong>R$ 989,50</strong></p>
            </div>

            <div className={style.produto}>
                <img src={imgViolao} alt="Violão" className={style.img_produto} />
                <p className={style.nome_produto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p className={style.preco_produto}><strong>R$ 989,50</strong></p>
            </div>

            <div className={style.produto}>
                <img src={imgViolao} alt="Violão" className={style.img_produto} />
                <p className={style.nome_produto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p className={style.preco_produto}><strong>R$ 989,50</strong></p>
            </div>

            <div className={style.produto}>
                <img src={imgViolao} alt="Violão" className={style.img_produto} />
                <p className={style.nome_produto}>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</p>
                <p className={style.preco_produto}><strong>R$ 989,50</strong></p>
            </div>
        </section>
    )
}

export default Lista_produtos