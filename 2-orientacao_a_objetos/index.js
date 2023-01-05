// dentro do JS cada arquivo é considerado um módulo e podemos escolher o que queremos exportar ou não a partir dele.

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// instanciando um objeto a uma classe
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
// cliente2.nome = "Alice"
// cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);