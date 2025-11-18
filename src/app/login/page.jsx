import styles from './page.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            {/* Lado esquerdo (logo) */}
            <div className={styles.left}>
                <img src="/temp/imagens/autores/backstage.jpeg" alt="Logo Bibliófilos" className={styles.logo} />
            </div>

            {/* Lado direito */}
            <div className={styles.right}>
                {/* Tela de seleção */}
                <div className={`${styles.formContainer} ${styles.selectType}`}>
                    <h2 className={styles.title}>SELECIONE O USUÁRIO</h2>
                    <select className={styles.selectInput}>
                        <option value="">SELECIONE O TIPO DE USUÁRIO</option>
                        <option value="2">Administrador</option>
                        <option value="0">Resenhista</option>
                        <option value="1">Livraria</option>
                    </select>
                    <button className={styles.btn}>PRÓXIMO</button>
                    <br />
                    <a href="/" className={styles.link}>Bibliófilos Community</a>
                </div>
            </div>
        </div>
    );
}