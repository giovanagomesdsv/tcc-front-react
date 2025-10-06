// imports das imagens
import azkaban from '../../../public/temp/imagens/livros/Harry Potter e o Prisioneiro de Azkaban.jpg';
import principe from '../../../public/temp/imagens/livros/Harry Potter e o Enigma do Principe.jpg';
import caliceFogo from '../../../public/temp/imagens/livros/Harry Potter e o Calice de Fogo.jpg';
import fenix from '../../../public/temp/imagens/livros/Harry Potter e a Ordem da Fenix.jpg';

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
    {
        "livro_id": 3,
        "livro_titulo": "Harry Potter  e o Calice de Fogo",
        "livro_sinopse": "Nesta aventura, o feiticeiro cresceu e está com 14 anos. O início do ano letivo de Harry Potter reserva muitas emoções, mágicas, e acontecimentos inesperados, além de um novo torneio em que os alunos de Hogwarts terão de demonstrar todas as habilidade mágicas e nãomágicas que vêm adquirindo ao longo de suas vidas. Harry é escolhido pelo Cálice de Fogo para competir como um dos campeões de Hogwarts, tendo ao lado seus fiéis amigos. Muitos desafios, feitiços, poções e confusões estão reservados para Harry. Além disso, ele terá que lidar ainda com os problemas comuns da adolescência amor, amizade, aceitação e rejeição.",
        "livro_editora": "Rocco",
        "livro_isbn": "-8532529835",
        "livro_ano": 1990,
        "livro_classidd": "12+",
        "livro_foto": caliceFogo
    },
    {
        "livro_id": 4,
        "livro_titulo": "Harry Potter  e a Ordem da Fenix",
        "livro_sinopse": "Nesta aventura, o feiticeiro cresceu e está com 14 anos. O início do ano letivo de Harry Potter reserva muitas emoções, mágicas, e acontecimentos inesperados, além de um novo torneio em que os alunos de Hogwarts terão de demonstrar todas as habilidade mágicas e nãomágicas que vêm adquirindo ao longo de suas vidas. Harry é escolhido pelo Cálice de Fogo para competir como um dos campeões de Hogwarts, tendo ao lado seus fiéis amigos. Muitos desafios, feitiços, poções e confusões estão reservados para Harry. Além disso, ele terá que lidar ainda com os problemas comuns da adolescência amor, amizade, aceitação e rejeição.",
        "livro_editora": "Rocco",
        "livro_isbn": "-8532529842",
        "livro_ano": 1990,
        "livro_classidd": "12+",
        "livro_foto": fenix
    },
];

// ----------------------------
// Mockup de RELAÇÕES LIVRO ↔ GÊNERO
// ----------------------------
const livroFantasia = [

    { "livro_id": 5, "gen_id": 6 },
    { "livro_id": 2, "gen_id": 6 },
    { "livro_id": 3, "gen_id": 6 },
    { "livro_id": 4, "gen_id": 6 }
];

// exportar para usar no React
// suspense/livroSuspense
export { fantasia, livroFantasia };
