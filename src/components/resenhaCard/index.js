import styles from './page.module.css';

import Link from "next/link";
import Image from "next/image";
import resCard from '@/components/mockup/resenha';

export default function ResenhaCard() {
  return (
    <div className={styles.gridContainer}>
      {/* Static blocks for the first 4 resenhas */}
      {resCard.resenha.slice(0, 4).map((item, index) => (
        <Link key={item.resenha_id} href={`/resenhas/${item.resenha_id}`} className={styles.linkStyle}>
          <div className={styles[`caixa${index + 1}`]}>
            <Image src={item.livro_imagem} alt={item.resenha_titulo} className={styles.imagem} width={200} height={300} />
            <div className={styles.textosContainer}>
              <h2 className={styles.textstyle2}>{item.resenha_titulo}</h2>
              <h3>{item.resenhista_nome} - {new Date(item.resenha_dtpublicacao).toLocaleDateString()}</h3>
              <h3 className={styles.boxText2}>{item.resenha_texto.substring(0, 100)}...</h3>
            </div>
          </div>
        </Link>
      ))}

      {/* Dynamic blocks for the remaining resenhas */}
      {resCard.resenha.slice(4).map((item, index) => (
        <Link key={item.resenha_id} href={`/resenhas/${item.resenha_id}`} className={styles.linkStyle}>
          <div className={styles[`caixa${(index % 4) + 1}`]}>
            <Image src={item.livro_imagem} alt={item.resenha_titulo} className={styles.imagem} width={200} height={300} />
            <div className={styles.textosContainer}>
              <h2 className={styles.textstyle2}>{item.resenha_titulo}</h2>
              <h3>{item.resenhista_nome} - {new Date(item.resenha_dtpublicacao).toLocaleDateString()}</h3>
              <h3 className={styles.boxText2}>{item.resenha_texto.substring(0, 100)}...</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
