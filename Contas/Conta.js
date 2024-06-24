//classe abstrata , não pode ser instaciada, só funciona para ser herdada
export class Conta{
    constructor( saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("nao deveria acessar aqui, ela é uma classe abstrata")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            console.error("nao deveria acessar aqui")
        }
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    sacar(valor) {
        throw new Error ("tem que ser sobreescrito , pois o valor da taxa muda de acordo com a conta ")
    }
    _sacar(valor , taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

    teste(){
        console.log("conta")
    }
}