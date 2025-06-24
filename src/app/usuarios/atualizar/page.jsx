import styles from './page.module.css';

export default function Atualizar() {
  return (
    <div>
      <form className={styles.format}>
        <label className={styles.label}>
          Status atual: <strong>ATIVO</strong>
        </label>

        <select name="status" required className={styles.select}>
          <option value="">-- Selecione novo status --</option>
          <option value="1">ATIVO</option>
          <option value="2">DESATIVADO</option>
        </select>

        <input
          type="submit"
          value="Atualizar"
          className={styles.inputEditar}
        />
      </form>
    </div>
  );
}