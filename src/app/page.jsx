import styles from "./page.module.css";
import Link from "next/link";
// import Slider from "@/components/slider";
import LivrosHome from "@/components/homelivrosBC";
import Image from "next/image";
import ClassicosBC from "@/components/classicosBC";
import SuspenseMisterioBC from "@/components/suspenseMisterioBC";
import FantasiaBC from "@/components/fantasiaBC";
import AventuraBC from "@/components/aventuraBC";



export default function Home() {
  return (
    <div className="container">
      {/* <Slider /> */}



      <h1>Home</h1>

      <Link href={"/login"}>Login</Link>
      <Link href={"#"}>Home</Link>
      <Link href={"/resenhas"}>Resenhas</Link>
      <Link href={"/autores"}>Autores</Link>
      <Link href={"/livros"}>Livros</Link>
      <Link href={"/sobre"}>Sobre</Link>


      <h1>Navegação</h1>

      <p>ADMINISTRADOR</p>
      <Link href={"/perfil"}>Perfil</Link>
      <Link href={"/avaliar"}>Avaliar</Link>
      <Link href={"/lista-livrarias"}>Livrarias</Link>
      <Link href={"/lista-resenhistas"}>Resenhistas</Link>
      <Link href={"/lista-livros"}>Livros</Link>
      <Link href={"/usuarios"}>Usuários</Link>
      <br />
      <p>LIVRARIAS</p>
      <Link href={"/anuncios"}>Anúncios</Link>
      <br />
      <p>RESENHISTAS E LIVRARIAS</p>
      <Link href={"/perfil"}>Perfil</Link>
      <Link href={"/criar-resenha"}>Criar Resenha</Link>
      <Link href={"/minhas-resenhas"}>Minhas Resenhas</Link>
      <div className={styles.navbar}>
        <img src='imagem.png' alt="img.png" className={styles.perfilstyle} />
        <Link href={"/login"} className={styles.navlinkstyle}>Login</Link>
        <Link href={"#"} className={styles.navlinkstyle}>Home</Link>
        <Link href={"/resenhas"} className={styles.navlinkstyle}>Resenhas</Link>
        <Link href={"/autores"} className={styles.navlinkstyle}>Autores</Link>
        <Link href={"/livros"} className={styles.navlinkstyle}>Livros</Link>
        <Link href={"/sobre"} className={styles.navlinkstyle}>Sobre</Link>

      </div>
      <div className={styles.tela1}>
        <section className={styles.tela1} id="sec1" />
        <div className={styles.letreiro}>
          <h3 className={styles.nome1}>Bibliófilos</h3>
          <h3 className={styles.nome2}>COMMUNITY</h3>
          <br /><br />
          <div className={styles.barra}><p>livros são sonhos que seguramos com as mãos</p></div>
        </div>
      </div>
      <LivrosHome />

      <main>

        <ClassicosBC />

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
                  <p style={{ fontSize: '2rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 2</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className={styles.hor2}>
                <div className={styles.image}>
                  <img src="/imagem4.png" alt="Imagem 4" />
                </div>
                <div className={styles.info}>
                  <p style={{ fontSize: '2rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 2</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <br /><br />
        {/*Terceiras imagens------------------------------------------------------------*/}
        {/*Terceira barra que separa informações */}

        <SuspenseMisterioBC />

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
                  <br /><br /><br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '2rem' }}>Texto 2</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 3</p>
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
                  <br /><br /><br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '2rem' }}>Texto 2</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 3</p>
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
                  <br /><br /><br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '2rem' }}>Texto 2</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 3</p>
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
                  <br /><br /><br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '2rem' }}>Texto 2</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 3</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <br /><br />
        {/*Quinta imagens ------------------------------------------------------------*/}
        {/*Quinta barra que separa informações */}

        <FantasiaBC />


        {/*Sexta imagens------------------------------------------------------------*/}
        {/*Sexta barra que separa informações */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
           
             <AventuraBC />
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
                  <br /><br /><br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '2rem' }}>Texto 2</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 3</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className={styles.hor2}>
                <div className={styles.image}>
                  <img src="/imagem4.png" alt="Imagem 4" />
                </div>
                <div className={styles.info}>
                  <br /><br /><br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 1</p>
                  <br /><br />
                  <p style={{ fontSize: '2rem' }}>Texto 2</p>
                  <br /><br />
                  <p style={{ fontSize: '1rem' }}>Texto 3</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <br /><br />
        {/*Setima imagens------------------------------------------------------------*/}
        {/*Setima barra que separa informações */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            <h1>Ficção</h1>
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
                <br /><br /><br /><br />
                <p style={{ fontSize: '2rem' }}>Texto 1</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 2</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 3</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className={styles.hor2}>
              <div className={styles.image}>
                <img src="/imagem6.png" alt="Imagem 6" />
              </div>
              <div className={styles.info}>
                <br /><br /><br /><br />
                <p style={{ fontSize: '2rem' }}>Texto 1</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 2</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 3</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className={styles.hor2}>
              <div className={styles.image}>
                <img src="/imagem7.png" alt="Imagem 7" />
              </div>
              <div className={styles.info}>
                <br /><br /><br /><br />
                <p style={{ fontSize: '2rem' }}>Texto 1</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 2</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 3</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className={styles.hor2}>
              <div className={styles.image}>
                <img src="/imagem8.png" alt="Imagem 8" />
              </div>
              <div className={styles.info}>
                <br /><br /><br /><br />
                <p style={{ fontSize: '2rem' }}>Texto 1</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 2</p>
                <br /><br />
                <p style={{ fontSize: '1rem' }}>Texto 3</p>
              </div>
            </div>
          </a>
        </div>

        <footer className={styles.siteFooter}>
          {/* Logo redonda no canto esquerdo */}
          <div className={styles.footerLogo}>
            <img src="/logo.png" alt="Logo do site" className={styles.footerLogo} />
          </div>

          {/* Texto centralizado */}
          <div>
            <h3>Participe da nossa comunidade.</h3>
            <br />
            <p className={styles.footerTexto}>Se torne um resenhista.<br /><br />Entre em contato já!</p>
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