// imports das imagens
import chamado from '../../../public/temp/imagens/livros/O chamado selvagem.jpg';
import caninos from '../../../public/temp/imagens/livros/can.jpg';
import alice from '../../../public/temp/imagens/livros/alice.jpg';
import terra from '../../../public/temp/imagens/livros/Viagem ao Centro da Terra.jpg';

// ----------------------------
// Mockup de LIVROS
// ----------------------------
const classicos = [
  {
    "livro_id": 8,
    "livro_titulo": "Caninos Brancos",
    "livro_sinopse": "Caninos brancos retrata a adaptabilidade social de uma criatura selvagem, o cachorro-lobo, e o seu progresso gradual para a civilização.",
    "livro_editora": "L&PM",
    "livro_isbn": "-8525410028",
    "livro_ano": 2002,
    "livro_classidd": "12+",
    "livro_foto": caninos
  },
  {
    "livro_id": 7,
    "livro_titulo": "O chamado selvagem",
    "livro_sinopse": "Buck é um cachorro enorme e afável que leva uma boa vida em um rancho na Califórnia. Porém, durante a febre do ouro nos anos 1890, ele é sequestrado e vendido para trabalhar puxando trenós no gélido norte da América.",
    "livro_editora": "Arqueiro",
    "livro_isbn": "-6555652173",
    "livro_ano": 2002,
    "livro_classidd": "12+",
    "livro_foto": chamado
  },
  {
    "livro_id": 10,
    "livro_titulo": "Viagem ao Centro da Terra",
    "livro_sinopse": "Um manuscrito antigo promete uma rota para o centro da Terra. O professor Lidenbrock parte em uma expedição que revela os primórdios da vida no planeta.",
    "livro_editora": "L&PM",
    "livro_isbn": "-8576830325",
    "livro_ano": 1985,
    "livro_classidd": "10+",
    "livro_foto": terra
  },
  {
    "livro_id": 13,
    "livro_titulo": "Alice no País das Maravilhas",
    "livro_sinopse": "Alice segue um coelho apressado e descobre um mundo cheio de aventuras absurdas e personagens excêntricos.",
    "livro_editora": "Camelot Editora",
    "livro_isbn": "9786587817651",
    "livro_ano": 2021,
    "livro_classidd": "10+",
    "livro_foto": alice
  }
];

// ----------------------------
// Mockup de RELAÇÕES LIVRO ↔ GÊNERO
// ----------------------------
const livroGenero = [
  { "livro_id": 7, "gen_id": 2 },
  { "livro_id": 8, "gen_id": 2 },
  { "livro_id": 10, "gen_id": 2 },
  { "livro_id": 13, "gen_id": 3 }
];

// exportar para usar no React
export { classicos, livroGenero };
