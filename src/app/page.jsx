import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
    
    <div className={styles.navbar}>
      <img src='imagem.png' alt="img.png" className={styles.perfilstyle}/>
      <Link href={"/login"}  className={styles.navlinkstyle}>Login</Link>
      <Link href={"#"} className={styles.navlinkstyle}>Home</Link>
      <Link href={"/resenhas"} className={styles.navlinkstyle}>Resenhas</Link>
      <Link href={"/autores"} className={styles.navlinkstyle}>Autores</Link>
      <Link href={"/livros"} className={styles.navlinkstyle}>Livros</Link>
      <Link href={"/sobre"} className={styles.navlinkstyle}>Sobre</Link>
      
    </div>
    <div className={styles.tela1}>
      <section className={styles.tela1} id="sec1"/>
                <div className={styles.letreiro}>
                    <h3 className={styles.nome1}>Bibliófilos</h3>
                    <h3 className={styles.nome2}>COMMUNITY</h3>
                    <br/><br/>
                    <div className={styles.barra}><p>livros são sonhos que seguramos com as mãos</p></div>
                </div>
    </div>

<div className={styles.gridContainer}>
  <div className={`${styles.caixa1} ${styles.caixa}`}>
    <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
    <span className={styles.textoCanto}>Texto 1</span>
  </div>

  <div className={`${styles.caixa2} ${styles.caixa}`}>
    <img src="/images/img2.jpg" alt="Imagem 2" className={styles.imagem} />
    <span className={styles.textoCanto}>Texto 2</span>
  </div>

  <div className={`${styles.caixa3} ${styles.caixa}`}>
    <img src="/images/img3.jpg" alt="Imagem 3" className={styles.imagem} />
    <span className={styles.textoCanto}>Texto 3</span>
  </div>

  <div className={`${styles.caixa4} ${styles.caixa}`}>
    <img src="/images/img4.jpg" alt="Imagem 4" className={styles.imagem} />
    <span className={styles.textoCanto}>Texto 4</span>
  </div>

  <div className={styles.caixa56Container}>
    <div className={`${styles.caixa5} ${styles.caixa}`}>
      <img src="/images/img5.jpg" alt="Imagem 5" className={styles.imagem} />
      <span className={styles.textoCanto}>Texto 5</span>
    </div>

    <div className={`${styles.caixa6} ${styles.caixa}`}>
      <img src="/images/img6.jpg" alt="Imagem 6" className={styles.imagem} />
      <span className={styles.textoCanto}>Texto 6</span>
    </div>
  </div>

  <div className={`${styles.caixa7} ${styles.caixa}`}>
    <img src="/images/img7.jpg" alt="Imagem 7" className={styles.imagem} />
    <span className={styles.textoCanto}>Texto 7</span>
  </div>
</div>


<main>
    {/*Primeira barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Clássicos</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

{/*Primeiras imagens ------------------------------------------------------------*/}
    {/*Caixa total das primeiras imagems*/}
<div>
    <div className={styles.box}>
    {/* ESQUERDA: Imagem com texto abaixo */}
    <div className={`${styles.box1} ${styles['box-vert1']}`} style={{ width: '50%',}}>
      <a href="#">
        <div className={styles.vert1}>
          <div className={styles.image}>
            <img src="/imagem1.png" alt="Imagem 1" />
          </div>
          <div className={styles.info}>
            <br/><br/><br/><br/>
            <p style={{ fontSize: '1rem'}}>Texto 1</p>
            <br/><br/><br/><br/>
            <p style={{ fontSize: '2rem'}}>Texto 2</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className={styles.vert1}>
          <div className={styles.image}>
            <img src="/imagem1.png" alt="Imagem 1" />
          </div>
          <div className={styles.info}>
            <br/><br/><br/><br/>
            <p style={{ fontSize: '1rem'}}>Texto 1</p>
            <br/><br/><br/><br/>
            <p style={{ fontSize: '2rem'}}>Texto 2</p>
          </div>
        </div>
      </a>
    </div>

    <div>
      <p>teste</p>
    </div>

    {/* DIREITA: Imagem com texto ao lado */}
    <div className={`${styles.box1} ${styles['box-hor1']}`} style={{ width: '50%',}}>
      <a href="#">
        <div className={styles.hor1}>
          <div className={styles.image}>
            <img src="/imagem2.png" alt="Imagem 2" />
          </div>
          <div className={styles.info}>
            <p>Texto 1</p>
            <br/>
            <p>Texto 2</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className={styles.hor1}>
          <div className={styles.image}>
            <img src="/imagem2.png" alt="Imagem 2" />
          </div>
          <div className={styles.info}>
            <p>Texto 1</p>
            <br/>
            <p>Texto 2</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<br/><br/>

      {/*Segundas imagens------------------------------------------------------------*/}
      {/*Segunda barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Horror</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

<div>
<div className={styles.box2}>
  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem3.png" alt="Imagem 3" />
      </div>
      <div className={styles.info}>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem4.png" alt="Imagem 4" />
      </div>
      <div className={styles.info}>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
      </div>
    </div>
  </a>
</div>
</div>

<br/><br/>
      {/*Terceiras imagens------------------------------------------------------------*/}
      {/*Terceira barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Suspense e Mistério</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

<div className={styles.box2}>
  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem5.png" alt="Imagem 5" />
      </div>
      <div className={styles.info}>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem6.png" alt="Imagem 6" />
      </div>
      <div className={styles.info}>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem7.png" alt="Imagem 7" />
      </div>
      <div className={styles.info}>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem8.png" alt="Imagem 8" />
      </div>
      <div className={styles.info}>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
      </div>
    </div>
  </a>
</div>

<br/><br/>
      {/*Quartas imagens------------------------------------------------------------*/}
      {/*Quarta barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Romance</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

    <div className={styles.box4style}>
  {/* Item 1 */}
  <div style={{ width: '22%', textAlign: 'center' }}>
    <a href="#">
      <div>
        <div>
          <img src="/imagem1.png" alt="Imagem 1" style={{ width: '100%' }} />
        </div>
        <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
        </div>
      </div>
    </a>
  </div>

  {/* Item 2 */}
  <div style={{ width: '22%', textAlign: 'center' }}>
    <a href="#">
      <div>
        <div>
          <img src="/imagem2.png" alt="Imagem 2" style={{ width: '100%' }} />
        </div>
        <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
        </div>
      </div>
    </a>
  </div>

  {/* Item 3 */}
  <div style={{ width: '22%', textAlign: 'center' }}>
    <a href="#">
      <div>
        <div>
          <img src="/imagem3.png" alt="Imagem 3" style={{ width: '100%' }} />
        </div>
        <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
        </div>
      </div>
    </a>
  </div>

  {/* Item 4 */}
  <div style={{ width: '22%', textAlign: 'center' }}>
    <a href="#">
      <div>
        <div>
          <img src="/imagem4.png" alt="Imagem 4" style={{ width: '100%' }} />
        </div>
        <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
        </div>
      </div>
    </a>
  </div>
</div>

<br/><br/>
{/*Quinta imagens ------------------------------------------------------------*/}
{/*Quinta barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Fantasia</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

    {/*Caixa total das primeiras imagems*/}
<div>
    <div className={styles.box}>
    {/* ESQUERDA: Imagem com texto abaixo */}
    <div className={`${styles.box1} ${styles['box-vert1']}`} style={{ width: '50%',}}>
      <a href="#">
        <div className={styles.vert1}>
          <div className={styles.image}>
            <img src="/imagem1.png" alt="Imagem 1" />
          </div>
          <div className={styles.info}>
          <br/><br/><br/><br/>
          <p style={{fontSize: '1rem'}}>Texto 1</p>
          <br/><br/>
          <p style={{fontSize: '2rem'}}>Texto 2</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className={styles.vert1}>
          <div className={styles.image}>
            <img src="/imagem1.png" alt="Imagem 1" />
          </div>
          <div className={styles.info}>
          <br/><br/><br/><br/>
          <p style={{fontSize: '1rem'}}>Texto 1</p>
          <br/><br/>
          <p style={{fontSize: '2rem'}}>Texto 2</p>
          </div>
        </div>
      </a>
    </div>

    {/* DIREITA: Imagem com texto ao lado */}
    <div className={`${styles.box1} ${styles['box-hor1']}`} style={{ width: '50%',}}>
      <a href="#">
        <div className={styles.hor1}>
          <div className={styles.image}>
            <img src="/imagem2.png" alt="Imagem 2" />
          </div>
          <div className={styles.info}>
          <p style={{fontSize: '1rem'}}>Texto 1</p>
          <br/><br/>
          <p style={{fontSize: '2rem'}}>Texto 2</p>
          </div>
        </div>
      </a>
      <a href="#">
        <div className={styles.hor1}>
          <div className={styles.image}>
            <img src="/imagem2.png" alt="Imagem 2" />
          </div>
          <div className={styles.info}>
          <p style={{fontSize: '1rem'}}>Texto 1</p>
          <br/><br/>
          <p style={{fontSize: '2rem'}}>Texto 2</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<br/><br/>

{/*Sexta imagens------------------------------------------------------------*/}
      {/*Sexta barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Aventura</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

<div>
<div className={styles.box2}>
  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem3.png" alt="Imagem 3" />
      </div>
      <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem4.png" alt="Imagem 4" />
      </div>
      <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
      </div>
    </div>
  </a>
</div>
</div>

<br/><br/>
      {/*Setima imagens------------------------------------------------------------*/}
      {/*Setima barra que separa informações */}
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        <h1>Drama</h1>
      </div>
      <hr style={{ width: '100%', border: '1px solid #ccc' }} />
    </div>

<div className={styles.box2}>
  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem5.png" alt="Imagem 5" />
      </div>
      <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem6.png" alt="Imagem 6" />
      </div>
      <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem7.png" alt="Imagem 7" />
      </div>
      <div className={styles.info}>
      <br/><br/><br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>        
      </div>
    </div>
  </a>

  <a href="#">
    <div className={styles.hor2}>
      <div className={styles.image}>
        <img src="/imagem8.png" alt="Imagem 8" />
      </div>
      <div className={styles.info}>
        <br/><br/><br/><br/>
        <p style={{fontSize: '2rem'}}>Texto 1</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 2</p>
        <br/><br/>
        <p style={{fontSize: '1rem'}}>Texto 3</p>
      </div>
    </div>
  </a>
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

</main>
  

    </div>
  );
}