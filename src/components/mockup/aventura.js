// imports das imagens
import azkaban from '../../../public/temp/imagens/livros/Harry Potter e o Prisioneiro de Azkaban.jpg';
import principe from '../../../public/temp/imagens/livros/Harry Potter e o Enigma do Principe.jpg';

// ----------------------------
// Mockup de LIVROS
// ----------------------------
const fantasia = [
    {
        "livro_id": 5,
        "livro_titulo": "Harry Potter  e o Enigma do Príncipe ",
        "livro_sinopse": "Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.",
        "livro_editora": "Rocco",
        "livro_isbn": "-8532529812",
        "livro_ano": 1990,
        "livro_classidd": "12+",
        "livro_foto": principe
    },
    {
        "livro_id": 2,
        "livro_titulo": "Harry Potter e o Prisioneiro de Azkaban",
        "livro_sinopse": "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, Harry Potter e o prisioneiro de Azkaban traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.",
        "livro_editora": "Rocco",
        "livro_isbn": "-8532529828",
        "livro_ano": 1990,
        "livro_classidd": "12+",
        "livro_foto": azkaban
    },
   
];

// ----------------------------
// Mockup de RELAÇÕES LIVRO ↔ GÊNERO
// ----------------------------
const livroFantasia = [

    { "livro_id": 5, "gen_id": 11 },
    { "livro_id": 2, "gen_id": 11 }
];

// exportar para usar no React
// suspense/livroSuspense
export { fantasia, livroFantasia };
