import styles from "./page.module.css";

export default function Livro() {
    return (
    <div className="container">
            
        <div className={styles.containerLivro}>
                
            <div className={styles.espacoEsq}>
                <img src="/livro.png" className={styles.livroFoto} />

                <h3 className={styles.livroAno}>Ano</h3>
                <h3>Autora</h3>
                <button className={styles.livroBotao}>Obter agora</button>
            </div>
            <div className={styles.espacoDir}>
                <h1 className={styles.livroTitulo}>Titulo</h1>
                <h3 className={styles.livroAutor}>Autor</h3>
                <h2 className={styles.livroPreco}>R$ 10.00</h2>

                <div className={styles.livroBoxSinopse}>
                    <text>Harry Potter e o enigma do príncipe dá continuidade à saga do jovem bruxo Harry Potter a partir do ponto em que o livro anterior parou o momento em que fica provado que o poder de Voldemort e dos Comensais da Morte, seus seguidores, cresce mais a cada dia, em meio à batalha entre o bem e o mal. A onda de terror provocada pelo Lorde das Trevas estaria afetando, até mesmo, o mundo dos trouxas (nãobruxos), e sendo agravada pela ação dos dementadores, criaturas mágicas aterrorizantes que sugam a esperança e a felicidade das pessoas. Harry, que acabou de completar 16 anos, parte rumo ao sexto ano na Escola de Magia e Bruxaria de Hogwarts, animado e ao mesmo tempo apreensivo com a perspectiva de ter aulas particulares com o professor Dumbledore, o diretor da escola e o bruxo mais respeitado em toda comunidade mágica. Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas.</text>
                </div>
                <div className={styles.livroAnuncio}>
                    <text>ANUNCIADO POR:...</text>
                </div>
                <div className={styles.livroBoxSinopse}>
                    <text> Detalhes de produto:</text>
                    <div className={styles.containerInformacoes}>
                    <text>text 1</text>
                    <text>text 2</text>
                    <text>text 3</text>
                    <text>text 4</text>
                    <text>text 5</text>
                    <text>text 6</text>
                    </div>
                </div>
            </div>



        </div>

    </div>
    )
}