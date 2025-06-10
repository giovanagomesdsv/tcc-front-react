import styles from './page.module.css';

export default function Avaliar() {
  // Dados fictícios como exemplo
  const resenha = {
    id: 1,
    titulo: 'Título da Resenha',
    autor: 'Nome do Resenhista',
    foto: 'livro.jpg',
  };

  const livraria = {
    id: 2,
    nome: 'Nome da Livraria',
    usuario: 'Nome do Usuário',
    foto: 'livraria.jpg',
  };

  return (
    <div>
      <div className="titulo">
        <h3>Olá, Seja bem-vindo!</h3>
      </div>

      <div className="avaliar">
        <div className="textnotificaçao">AVALIAR</div>

        {/* Card da Resenha */}
        <div className="card card1">
          <img className="imagem" src={`/imagens/livros/${resenha.foto}`} alt="Livro" />
          <div className="info">
            <p>{resenha.titulo}</p>
            <p>{resenha.autor}</p>
          </div>
          <div className="acao">
            <a href={`/avaliar/avaliar.php?id=${resenha.id}`}>
              <button className="botao">Avaliar</button>
            </a>
          </div>
        </div>

        {/* Card da Livraria */}
        <div className="card card1">
          <img className="imagem" src={`/imagens/livrarias/${livraria.foto}`} alt="Livraria" />
          <div className="info">
            <p>{livraria.nome}</p>
            <p>{livraria.usuario}</p>
          </div>
          <div className="acao">
            <a href={`/avaliar/avaliar-livraria.php?id=${livraria.id}`}>
              <button className="botao">Avaliar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}