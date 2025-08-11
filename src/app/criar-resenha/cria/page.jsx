import styles from "./page.module.css";

export default function Cria() {
    return (
        <div className="container">
            <header><p style={{marginRight: '80%'}}> BIBLIÓFILOS Community </p></header>
         <div className={styles.box1}>
            {/*Tela1 */}
            <div className={styles.boxdisplay}>
                <img src='teste.png' alt='test.png' className={styles.imgbox}/>
                <br/>
                <p className={styles.color1} style={{marginLeft: '10rem'}}>Sinopse:</p>
            </div>
            <div className={styles.boxdisplay}>
            <p className={styles.color1}>Resenha:</p>
            </div>
            <div className={styles.textbox}>
              <p className={styles.textdisplay}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellendus ipsa amet sed blanditiis eum fuga ea ipsam dolores cupiditate molestiae, nesciunt cum quidem sint quos reiciendis! Sit, iusto veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, maiores dolorum ipsum necessitatibus, doloremque obcaecati optio hic nemo repudiandae esse totam ducimus accusantium! Nisi dolorem eos, voluptatum dicta magni ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem inventore obcaecati, officia facere perferendis explicabo delectus harum. Esse earum, quis assumenda minima architecto est aperiam reiciendis blanditiis explicabo sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem amet ipsam provident ad ducimus voluptate quia pariatur harum, non id mollitia, laborum ea tenetur corporis! Tenetur eaque accusantium corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deleniti perferendis iure fugit, voluptas voluptate eveniet commodi ea, voluptatem modi laudantium laborum! Dolor eos cumque, qui placeat culpa nesciunt cupiditate?</p>  
            </div>
            <br/><br/>
            <div className={styles.textstyles1}>
            <p>Avaliação do livro:</p>
            <br/><br/>
            <p className={styles.estrelas}>⭐⭐⭐⭐⭐</p>
            </div>
            <div>
              <button href="" className={styles.buttonstyle1}><p>Enviar</p></button>
              <button className={styles.buttonstyle1}><p>Cancelar</p></button>  
            </div>
         </div>
        </div>
    )
}