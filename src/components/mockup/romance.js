// imports das imagens
import sete from '../../../public/temp/imagens/livros/Os sete maridos de Evelyn Hugo.jpg';
import asa from '../../../public/temp/imagens/livros/quartaasa.jpg';

// ----------------------------
// Mockup de LIVROS
// ----------------------------
const romance = [

   
    {
         "livro_id": 14,
			"livro_titulo": "Os sete maridos de Evelyn Hugo",
			"livro_sinopse": "Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua (verdadeira história) ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas.“Evelyn Hugo faz Elizabeth Taylor parecer sem graça. Você vai rir com ela, chorar, sofrer, e então voltar para a primeira página e fazer tudo de novo. ― Heather Cocks e Jessica Morgan, autoras de The Royal We",
			"livro_editora": "Paralela",
			"livro_isbn": "978-8584391509",
			"livro_ano": 2019,
			"livro_classidd": "+18 ",
			"livro_foto": sete
		},
		{
             "livro_id": 15,
			"livro_titulo": "Quarta asa",
			"livro_sinopse": "Um dragão sem seu cavaleiro é uma tragédia. Um cavaleiro sem seu dragão é um homem morto. Em Quarta Asa, best-seller #1 do The New York Times, uma jovem precisa sobreviver ao treinamento em uma escola de elite para poderosos cavaleiros de dragões, onde a única regra é se formar... ou morrer tentando. Violet Sorrengail, uma jovem de vinte anos, estava destinada a entrar na Divisão dos Escribas, levando uma vida relativamente tranquila entre os livros e as aulas de História.",
			"livro_editora": "Planeta Minotauro",
			"livro_isbn": "978-8542225853",
			"livro_ano": 2024,
			"livro_classidd": "16+",
			"livro_foto": asa
		},
          
    {
         "livro_id": 14,
			"livro_titulo": "Os sete maridos de Evelyn Hugo",
			"livro_sinopse": "Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua (verdadeira história) ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas.“Evelyn Hugo faz Elizabeth Taylor parecer sem graça. Você vai rir com ela, chorar, sofrer, e então voltar para a primeira página e fazer tudo de novo. ― Heather Cocks e Jessica Morgan, autoras de The Royal We",
			"livro_editora": "Paralela",
			"livro_isbn": "978-8584391509",
			"livro_ano": 2019,
			"livro_classidd": "+18 ",
			"livro_foto": sete
		},
		{
             "livro_id": 15,
			"livro_titulo": "Quarta asa",
			"livro_sinopse": "Um dragão sem seu cavaleiro é uma tragédia. Um cavaleiro sem seu dragão é um homem morto. Em Quarta Asa, best-seller #1 do The New York Times, uma jovem precisa sobreviver ao treinamento em uma escola de elite para poderosos cavaleiros de dragões, onde a única regra é se formar... ou morrer tentando. Violet Sorrengail, uma jovem de vinte anos, estava destinada a entrar na Divisão dos Escribas, levando uma vida relativamente tranquila entre os livros e as aulas de História.",
			"livro_editora": "Planeta Minotauro",
			"livro_isbn": "978-8542225853",
			"livro_ano": 2024,
			"livro_classidd": "16+",
			"livro_foto": asa
		}
];

// ----------------------------
// Mockup de RELAÇÕES LIVRO ↔ GÊNERO
// ----------------------------
const livroRomance= [
  { "livro_id": 14, "gen_id": 26 },
  { "livro_id": 15, "gen_id": 26 },


];

// exportar para usar no React
export { romance, livroRomance };
