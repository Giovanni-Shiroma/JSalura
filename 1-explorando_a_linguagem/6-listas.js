console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log(`Destinos possiveis: ${salvador} ${saoPaulo} ${rioDeJaneiro}`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // Adicionando um item na lista

console.log(listaDeDestinos);

// 1 parametro é a posição e o 2 parametro a quantidade a partir da posição
listaDeDestinos.splice(1, 1) // removendo um elemento da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
