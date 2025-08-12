import styles from "./page.module.css";
import Link from "next/link";

export default function Resenhas() {
    return(
<div className="container">
    <div className={styles.navbar}>
      <img src='imagem.png' alt="img.png" className={styles.perfilstyle}/>
      <Link href={"/link"}  className={styles.navlinkstyle}>Login</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Home</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Resenhas</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Autores</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Livros</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Sobre</Link>
    </div>
    {/*Segundas imagens------------------------------------------------------------*/}
      {/*Segunda barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Horror</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

    <div style={{ width: '22%', textAlign: 'center' }}>
    <a href="#">
      <div>
        <div>
          <img src="/imagem3.png" alt="Imagem 3" style={{ width: '100%' }} />
        </div>
        
        <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
        </div>

        <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
        </div>

      </div>
    </a>
  </div>

</div>

    

    );
}