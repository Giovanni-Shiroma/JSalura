import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;
    // O static cria um atributo que vai pegar em todas as contas correntes
    static numeroDeContas = 0;

    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields;
    // O '_' é uma boa pratica para avisar outros devs que não seria legal mexer nessa classe fora da class
    _saldo = 0;



    set cliente(novoValor){
        // instanceof verifica se o valor vai ser algo relacionado a class chamada que é o Cliente 
        // se for ele altera se não, não faz nada
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    };

    depositar(valor){
        // early return
        if(valor <= 0) {
            return;
        }

        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

// O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação. 
// O arquivo gerado para este curso tem apenas algumas informações.