
//ser autenticavel significa ter a propriedade senha

export class SistemaAurtenticao {
    static login(autenticavel , senha){
        if(SistemaAurtenticao.ehAutenticavel(autenticavel)){
       return autenticavel.autenticar(senha)
    }
    return false;
    }
    static ehAutenticavel(autenticavel){
       return  "autenticar" in autenticavel && 
       autenticavel.autenticar instanceof Function
    }
}