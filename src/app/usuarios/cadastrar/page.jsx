import styles from "./page.module.css";

export default function FormCadastrarUsuario() {
  return (
    <div>
      <form className={styles.format2}>
        <label className={styles.label}>E-mail:</label>
        <input
          type="email"
          name="email"
          required
          className={styles.inputEditar2}
        />

        <label className={styles.label}>Nome:</label>
        <input
          type="text"
          name="nome"
          required
          className={styles.inputEditar2}
        />

        <label className={styles.label}>Senha:</label>
        <input
          type="password"
          name="senha"
          required
          className={styles.inputEditar2}
        />

        <label className={styles.label}>Tipo de usuário:</label>
        <select
          name="usuario"
          id="usuario"
          required
          className={styles.inputEditar2}
        >
          <option value="">Selecione...</option>
          <option value="2">Administrador</option>
          <option value="0">Resenhista</option>
        </select>

        <input
          type="submit"
          value="Cadastrar usuário"
          className={styles.inputConfirmar}
        />
      </form>
    </div>
  );
}
