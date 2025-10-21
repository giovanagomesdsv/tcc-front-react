import Link from "next/link";
import Image from "next/image";

import res from '@/components/mockup/resenha';;

export default function ResenhaCard() {
  return (
    <div className={styles.gridContainer}>

      <Link href="/resenhas/resenha" className={styles.linkStyle}>
        <div className={styles.caixa1}>
          <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
          <h1 className={styles.textstyle2}>Texto 1</h1>
          <h3 style={{ marginTop: '3rem' }}>Malfoy 25 06 17 - 13:47:48</h3>
        </div>
      </Link>

      <Link href="/destino" className={styles.linkStyle}>
        <div className={styles.caixa2}>
          <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
          <h1 className={styles.textstyle2}>Texto 1</h1>
          <h3 style={{ marginTop: '3rem' }}>Malfoy 25 06 17 - 13:47:48</h3>
        </div>
      </Link>

      <Link href="/destino" className={styles.linkStyle}>
        <div className={styles.caixa3}>
          <img src="/images/img3.jpg" alt="Imagem 3" className={styles.imagem3} />
          <div className={styles.textosContainer}>
            <h2 className={styles.textstyle2}>Harry Potter e a Câmara Secreta</h2>
            <h3>Malfoy 2025 - 06 17 13:47:48</h3>
            <h3 className={styles.boxText2}>Texto 3</h3>
          </div>
        </div>
      </Link>

      <Link href="/destino" className={styles.linkStyle}>
        <div className={styles.caixa4}>
          <img src="/images/img3.jpg" alt="Imagem 4" className={styles.imagem2} />

          <div className={styles.textosContainer}>
            <h1 className={styles.textstyle1}>Harry Potter e a Ordem da Fenix</h1>
            <br />
            <h3>Malfoy - 25-06-17 13:47:48</h3>
            <div className={styles.boxText}>
              <h3 style={{ marginLeft: '1rem' }}>Harry potter...</h3>
            </div>
          </div>
        </div>
      </Link>

      <Link href="/destino" className={styles.linkStyle}>
        <div className={`${styles.caixa1} ${styles.caixa}`}>
          <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
          <h1 className={styles.textstyle2}>Texto 1</h1>
          <h3 style={{ marginTop: '3rem' }}>Malfoy 25 06 17 - 13:47:48</h3>
        </div>

        <div className={`${styles.caixa2} ${styles.caixa}`}>
          <img src="/images/img1.jpg" alt="Imagem 1" className={styles.imagem} />
          <h1 className={styles.textstyle2}>Texto 1</h1>
          <h3 style={{ marginTop: '3rem' }}>Malfoy 25 06 17 - 13:47:48</h3>
        </div>
      </Link>

      <Link href="/destino" className={styles.linkStyle}>
        <div className={styles.caixa3}>
          <img src="/images/img4.jpg" alt="Imagem 3" className={styles.imagem3} />

          <div className={styles.textosContainer}>
            <h2 className={styles.textstyle2}>Harry Potter e a Câmara Secreta</h2>
            <h3>Malfoy 2025 - 06 17 13:47:48</h3>
            <h3 className={styles.boxText2}>Texto 3</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
