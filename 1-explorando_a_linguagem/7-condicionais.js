console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 12;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if( idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log("Boa viagem!!")
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Comprador menor de idade, não tenho permissão para vender")
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada ) {
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);