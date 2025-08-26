import styles from "./page.module.css";
import Link from "next/link";
import clsx from 'clsx';

export default function Resenhas() {
    return(
<div className="container">
    <div className={styles.navbar}>
      <img src='imagem.png' alt="img.png" className={styles.navlinkstyle}/>
      <Link href={"/link"}  className={styles.navlinkstyle}>Login</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Home</Link>
      <Link href="#" className={clsx(styles.navlinkstyle2, "fix2")}>Resenhas</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Autores</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Livros</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Sobre</Link>
    </div>
    <br/><br/>
    {/*Segundas imagens------------------------------------------------------------*/}
      {/*Segunda barra que separa informações */}
<div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Todas as resenhas</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
</div>

<div className={styles.gridContainer}>
  <div className={`${styles.caixa1} ${styles.caixa}`}>
    <Link href="/destino" className={styles.linkStyle}>
    <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
    </Link>
</div>

<div className={`${styles.caixa2} ${styles.caixa}`}>
    <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
</div>

  <div className={`${styles.caixa3} ${styles.caixa}`}>
    <img src="/images/img3.jpg" alt="Imagem 3" className={styles.imagem3} />

<div className={styles.textosContainer}>
    <h2 className={styles.textstyle2}>Harry Potter e a Câmara Secreta</h2>
    <h3>Malfoy 2025 - 06 17 13:47:48</h3>
    <h3 className={styles.boxText2}>Texto 3</h3>
  </div>

</div>

<div className={`${styles.caixa4} ${styles.caixa}`}>
    <img src="/images/img3.jpg" alt="Imagem 4" className={styles.imagem2}/>

    <div className={styles.textosContainer}>
    <h1 className={styles.textstyle1}>Harry Potter e a Ordem da Fenix</h1>
    <br/>
    <h3>Malfoy - 25-06-17 13:47:48</h3>
    <div className={styles.boxText}>
    <h3 style={{marginLeft:'1rem'}}>Harry potter...</h3>
    </div>
  </div>
</div>

<div className={`${styles.caixa1} ${styles.caixa}`}>
   <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa2} ${styles.caixa}`}>
    <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa3} ${styles.caixa}`}>
  <img src="/images/img4.jpg" alt="Imagem 3" className={styles.imagem3} />

  <div className={styles.textosContainer}>
    <h2 className={styles.textstyle2}>Harry Potter e a Câmara Secreta</h2>
    <h3>Malfoy 2025 - 06 17 13:47:48</h3>
    <h3 className={styles.boxText2}>Texto 3</h3>
  </div>
</div>

{/*sessão 2 */}

<div className={`${styles.caixa4} ${styles.caixa}`}>
    <img src="/images/img3.jpg" alt="Imagem 4" className={styles.imagem2}/>

    <div className={styles.textosContainer}>
    <h1 className={styles.textstyle1}>Harry Potter e a Ordem da Fenix</h1>
    <br/>
    <h3>Malfoy - 25-06-17 13:47:48</h3>
    <div className={styles.boxText}>
    <h3 style={{marginLeft:'1rem'}}>Harry potter...</h3>
    </div>
  </div>
</div>

<div className={`${styles.caixa1} ${styles.caixa}`}>
   <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa2} ${styles.caixa}`}>
    <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa3} ${styles.caixa}`}>
  <img src="/images/img4.jpg" alt="Imagem 3" className={styles.imagem3} />

  <div className={styles.textosContainer}>
    <h2 className={styles.textstyle2}>Harry Potter e a Câmara Secreta</h2>
    <h3>Malfoy 2025 - 06 17 13:47:48</h3>
    <h3 className={styles.boxText2}>Texto 3</h3>
  </div>
</div>

<div className={`${styles.caixa4} ${styles.caixa}`}>
    <img src="/images/img3.jpg" alt="Imagem 4" className={styles.imagem2}/>

    <div className={styles.textosContainer}>
    <h1 className={styles.textstyle1}>Harry Potter e a Ordem da Fenix</h1>
    <br/>
    <h3>Malfoy - 25-06-17 13:47:48</h3>
    <div className={styles.boxText}>
    <h3 style={{marginLeft:'1rem'}}>Harry potter...</h3>
    </div>
  </div>
</div>

<div className={`${styles.caixa1} ${styles.caixa}`}>
   <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa2} ${styles.caixa}`}>
    <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa3} ${styles.caixa}`}>
  <img src="/images/img4.jpg" alt="Imagem 3" className={styles.imagem3} />

  <div className={styles.textosContainer}>
    <h2 className={styles.textstyle2}>Harry Potter e a Câmara Secreta</h2>
    <h3>Malfoy 2025 - 06 17 13:47:48</h3>
    <h3 className={styles.boxText2}>Texto 3</h3>
  </div>
</div>

<div className={`${styles.caixa4} ${styles.caixa}`}>
    <img src="/images/img3.jpg" alt="Imagem 4" className={styles.imagem2}/>

    <div className={styles.textosContainer}>
    <h1 className={styles.textstyle1}>Harry Potter e a Ordem da Fenix</h1>
    <br/>
    <h3>Malfoy - 25-06-17 13:47:48</h3>
    <div className={styles.boxText}>
    <h3 style={{marginLeft:'1rem'}}>Harry potter...</h3>
    </div>
  </div>
</div>

<div className={`${styles.caixa1} ${styles.caixa}`}>
   <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa2} ${styles.caixa}`}>
    <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <h1 className={styles.textstyle2}>Texto 1</h1>
    <h3 style={{marginTop:'3rem'}}>Malfoy 25 06 17 - 13:47:48</h3>
  </div>

  <div className={`${styles.caixa3} ${styles.caixa}`}>
  <img src="/images/img4.jpg" alt="Imagem 3" className={styles.imagem3} />

  <div className={styles.textosContainer}>
    <h2 className={styles.textstyle2}>Harry Potter e a Câmara Secreta</h2>
    <h3>Malfoy 2025 - 06 17 13:47:48</h3>
    <h3 className={styles.boxText2}>Texto 3</h3>
  </div>
</div>

<div className={`${styles.caixa4} ${styles.caixa}`}>
    <img src="/images/img3.jpg" alt="Imagem 4" className={styles.imagem2}/>

    <div className={styles.textosContainer}>
    <h1 className={styles.textstyle1}>Harry Potter e a Ordem da Fenix</h1>
    <br/>
    <h3>Malfoy - 25-06-17 13:47:48</h3>
    <div className={styles.boxText}>
    <h3 style={{marginLeft:'1rem'}}>Harry potter...</h3>
    </div>
  </div>
</div>
</div>

<footer className={styles.siteFooter}>
  {/* Logo redonda no canto esquerdo */}
  <div className={styles.footerLogo}>
    <img src="/logo.png" alt="Logo do site" className={styles.footerLogo}/>
  </div>

  {/* Texto centralizado */}
  <div>
  <h3>Participe da nossa comunidade.</h3>
  <br/>
  <p className={styles.footerTexto}>Se torne um resenhista.<br/><br/>Entre em contato já!</p>
  </div>

  {/* Ícones das redes sociais no canto direito */}
  <div className={styles.footerRedes}>
  <a
    href="https://twitter.com/seuperfil"
    target="_blank"
    rel="noopener noreferrer"
    className="bx bxl-twitter"
    aria-label="Twitter"
  ></a>

  <a
    href="https://instagram.com/seuperfil"
    target="_blank"
    rel="noopener noreferrer"
    className="bx bxl-instagram"
    aria-label="Instagram"
  ></a>

  <a
    href="https://tiktok.com/@seuperfil"
    target="_blank"
    rel="noopener noreferrer"
    className="bx bxl-tiktok"
    aria-label="TikTok"
  ></a>
</div>
</footer>

</div>



    

    );
}