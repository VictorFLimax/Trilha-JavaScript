import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Funcionario } from "./Funcionarios/Funcionario.js";
import { SistemaAurtenticao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("victor", 70450764281 , 12000)
diretor.cadastrarSenha(123)
const gerente = new Gerente("carlos", 586354732001 , 25000)
gerente.cadastrarSenha(12345678);

const  cliente = new Cliente("ana", 75485264581 , 12345)

const clientelogado = SistemaAurtenticao.login(cliente,12345)

const diretorlogado = SistemaAurtenticao.login(diretor , 123)
const gerenteLogado = SistemaAurtenticao.login(gerente , 12345678 )


console.log(clientelogado , gerenteLogado , diretorlogado)
