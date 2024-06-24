export class ContaSalario extends ConvolverNode{
    constructor(){
        super(0 , cliente , 100)
    }

    //metodo abstrado , sempre tem que ser sobreescrito , pois sempre vai mudar o valor da taxa 

    sacar(){
        const taxa = 1.01;
        return this._sacar(valor , taxa);
    }
}