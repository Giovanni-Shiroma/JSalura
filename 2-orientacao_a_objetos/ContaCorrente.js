export class ContaCorrente{
    agencia;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields;

    // O '_' é uma boa pratica para avisar outros devs que não 
    // seria legal mexer nessa classe fora da class
    _saldo = 0;

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
}

// O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação. 
// O arquivo gerado para este curso tem apenas algumas informações.