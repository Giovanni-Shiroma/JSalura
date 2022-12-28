console.log(`\n Trabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 12;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    };
    contador++;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
}else {
    console.log("Desculpe tivemos um erro.")
}


for(let cont = 0; cont < 3; cont++) {
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
    };
}