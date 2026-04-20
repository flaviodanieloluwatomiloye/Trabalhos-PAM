import { calcularMedia, definirStatus } from './opc.js'
import { preencherTabela } from './preencher.js'
import { atualizarTabela, realcarStatus } from './atualizarTabela.js'

//Gera a tabela a partir do JSON
let trs = await preencherTabela();

//Calcula as médias e faz os status 
atualizarTabela(trs, calcularMedia, definirStatus);

//Muda as cores de fundo
realcarStatus(trs);