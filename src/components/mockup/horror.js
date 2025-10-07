// imports das imagens
import cemiterio from '../../../public/temp/imagens/livros/cemiterio.jpg';
import it from '../../../public/temp/imagens/livros/it.jpg';

// ----------------------------
// Mockup de LIVROS
// ----------------------------
const horror = [
    {
        "livro_id": 23,
        "livro_titulo": "O cemitério",
        "livro_sinopse": "O livro que inspirou o filme O cemitério maldito. Louis Creed, um jovem médico de Chicago, acredita que encontrou seu lugar em uma pequena cidade do Maine. A boa casa, o trabalho na universidade e a felicidade da esposa e dos filhos lhe trazem a certeza de que fez a melhor escolha. Num dos primeiros passeios pela região, conhecem um cemitério no bosque próximo à sua casa. Ali, gerações de crianças enterraram seus animais de estimação. Mas, para além dos pequenos túmulos, há um outro cemitério. Uma terra maligna que atrai pessoas com promessas sedutoras. Um universo dominado por forças estranhas capazes de tornar real o que sempre pareceu impossível. A princípio, Louis Creed se diverte com as histórias fantasmagóricas do vizinho Crandall. No entanto, quando o gato de sua filha Eillen morre atropelado e, subitamente, retorna à vida, ele percebe que há coisas que nem mesmo a sua ciência pode explicar. Que mistérios esconde o cemitério dos bichos? Terá o homem o direito de interferir no mundo dos mortos? Em busca das respostas, Louis Creed é levado por uma trama sobrenatural em que o limite entre a vida e a morte é inexistente. E, quando descobre a verdade, percebe que ela é muito pior que seus mais terríveis pesadelos. Pior que a própria morte - e infinitamente mais poderosa. A Capa Pode Variar.",
        "livro_editora": "Suma",
        "livro_isbn": "8581050395",
        "livro_ano": 1985,
        "livro_classidd": "12+",
        "livro_foto":cemiterio
    },
    {
        "livro_id": 24,
        "livro_titulo": "It: A coisa",
        "livro_sinopse": "Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo.\n\nDurante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.\n\nQuase trinta anos depois, o grupo volta a se encontrar. Mike, o único que permaneceu em Derry, dá o sinal ― uma nova onda de terror tomou a pequena cidade. É preciso unir forças novamente. Só eles têm a chave do enigma. Só eles sabem o que se esconde nas entranhas de Derry. Só eles podem vencer a Coisa.\n\n“Mesmo depois de tantos anos, o público continua obcecado por IT. Ficamos obcecados porque todos temos medos. Todos temos algo que nos assusta, sejam palhaços e aranhas ou coisas que se escondem em um lugar muito mais profundo de nossa mente. Este livro fala com todo mundo. É o romance mais assustador de King, e duvido que isso vá mudar” ― The Guardian",
        "livro_editora": "Suma",
        "livro_isbn": "8560280944",
        "livro_ano": 1983,
        "livro_classidd": "17+",
        "livro_foto": it
    }

];

// ----------------------------
// Mockup de RELAÇÕES LIVRO ↔ GÊNERO
// ----------------------------
const livroHorror = [

    { "livro_id": 23, "gen_id": 8 },
    { "livro_id": 24, "gen_id": 8 }
];

// exportar para usar no React
// suspense/livroSuspense
export { horror, livroHorror };
