// imports das imagens
import terra from '../../../public/temp/imagens/livros/Viagem ao Centro da Terra.jpg';

// ----------------------------
// Mockup de LIVROS
// ----------------------------
const ficcao = [
 {
            "livro_id": 10,
			"livro_titulo": "Viagem ao Centro da Terra",
			"livro_sinopse": "Quando o professor Lidenbrock encontrou um velho manuscrito islandês perdido em uma loja de livros usados em Hamburgo, imaginou que faria um mergulho profundo na crônica dos príncipes nórdicos da Idade Média. Perdido dentro do livro, porém, havia um bilhete de um cientista do século XVI que prometia a possibilidade de uma exploração a profundidades inimagináveis: em uma breve mensagem criptografada, Arne Saknussemm afirmava ter descoberto uma rota para o centro da Terra. Junto com seu sobrinho Axel e seu guia islandês Hans, o professor embarca em uma expedição secreta na qual, camada por camada, os primórdios da vida no planeta são revelados com a maestria e riqueza de detalhes características de Júlio Verne. ",
			"livro_editora": "L&PM",
			"livro_isbn": "-8576830325",
			"livro_ano": 1985,
			"livro_classidd": "10+",
			"livro_foto": terra
		},
         {
            "livro_id": 10,
			"livro_titulo": "Viagem ao Centro da Terra",
			"livro_sinopse": "Quando o professor Lidenbrock encontrou um velho manuscrito islandês perdido em uma loja de livros usados em Hamburgo, imaginou que faria um mergulho profundo na crônica dos príncipes nórdicos da Idade Média. Perdido dentro do livro, porém, havia um bilhete de um cientista do século XVI que prometia a possibilidade de uma exploração a profundidades inimagináveis: em uma breve mensagem criptografada, Arne Saknussemm afirmava ter descoberto uma rota para o centro da Terra. Junto com seu sobrinho Axel e seu guia islandês Hans, o professor embarca em uma expedição secreta na qual, camada por camada, os primórdios da vida no planeta são revelados com a maestria e riqueza de detalhes características de Júlio Verne. ",
			"livro_editora": "L&PM",
			"livro_isbn": "-8576830325",
			"livro_ano": 1985,
			"livro_classidd": "10+",
			"livro_foto": terra
		},
         {
            "livro_id": 10,
			"livro_titulo": "Viagem ao Centro da Terra",
			"livro_sinopse": "Quando o professor Lidenbrock encontrou um velho manuscrito islandês perdido em uma loja de livros usados em Hamburgo, imaginou que faria um mergulho profundo na crônica dos príncipes nórdicos da Idade Média. Perdido dentro do livro, porém, havia um bilhete de um cientista do século XVI que prometia a possibilidade de uma exploração a profundidades inimagináveis: em uma breve mensagem criptografada, Arne Saknussemm afirmava ter descoberto uma rota para o centro da Terra. Junto com seu sobrinho Axel e seu guia islandês Hans, o professor embarca em uma expedição secreta na qual, camada por camada, os primórdios da vida no planeta são revelados com a maestria e riqueza de detalhes características de Júlio Verne. ",
			"livro_editora": "L&PM",
			"livro_isbn": "-8576830325",
			"livro_ano": 1985,
			"livro_classidd": "10+",
			"livro_foto": terra
		},
         {
            "livro_id": 10,
			"livro_titulo": "Viagem ao Centro da Terra",
			"livro_sinopse": "Quando o professor Lidenbrock encontrou um velho manuscrito islandês perdido em uma loja de livros usados em Hamburgo, imaginou que faria um mergulho profundo na crônica dos príncipes nórdicos da Idade Média. Perdido dentro do livro, porém, havia um bilhete de um cientista do século XVI que prometia a possibilidade de uma exploração a profundidades inimagináveis: em uma breve mensagem criptografada, Arne Saknussemm afirmava ter descoberto uma rota para o centro da Terra. Junto com seu sobrinho Axel e seu guia islandês Hans, o professor embarca em uma expedição secreta na qual, camada por camada, os primórdios da vida no planeta são revelados com a maestria e riqueza de detalhes características de Júlio Verne. ",
			"livro_editora": "L&PM",
			"livro_isbn": "-8576830325",
			"livro_ano": 1985,
			"livro_classidd": "10+",
			"livro_foto": terra
		}
   
];

// ----------------------------
// Mockup de RELAÇÕES LIVRO ↔ GÊNERO
// ----------------------------
const livroFiccao = [

    { "livro_id": 10, "gen_id": 7 }
];

// exportar para usar no React
// suspense/livroSuspense
export { ficcao, livroFiccao };
