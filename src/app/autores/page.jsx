import styles from "./page.module.css";
import Link from "next/link";
import clsx from 'clsx';

import Autor from '@/components/autoresBC';

export default function Autores() {
    return (
        <div className="container">

            <div className={styles.navbar}>
                <img src='imagem.png' alt="img.png" className={styles.navlinkstyle} />
                <Link href="/login" className={styles.navlinkstyle}>Login</Link>
                <Link href="/" className={styles.navlinkstyle}>Home</Link>
                <Link href="/resenhas" className={styles.navlinkstyle}>Resenhas</Link>
                <Link href="/autores" className={clsx(styles.navlinkstyle2, "fix2")}>Autores</Link>
                <Link href="/livros" className={styles.navlinkstyle}>Livros</Link>
                <Link href="/sobre" className={styles.navlinkstyle}>Sobre</Link>
            </div>
            <br /><br />

            <div className="buscacontainer">
                <form action="" method="GET" className="buscaform">
                    <input type="text" name="busca" placeholder="nome do autor" />
                    <button type="submit"><i className='bx bx-search'></i></button>
                </form>
            </div>

            {/* Segunda barra que separa informações */}
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '5rem' }}>
                    <h1>TODOS OS AUTORES</h1>
                </div>
                <hr style={{ width: '100%', border: '1px solid #ccc' }} />
            </div>

            {/* Rendereização do componente autores */}
            <Autor />

        </div>
    )
}