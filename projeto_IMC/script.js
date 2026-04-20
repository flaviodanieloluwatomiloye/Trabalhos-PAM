// script.js
import { calcularIMC, definirIMC } from './opc.js';
import { preencherTabela } from './preencherTabela.js'; // Verifique este nome!
import { atualizarTabela, realcarStatus } from './atualizarTabela.js';

async function inicializar() {
    try {
        // 1. Carrega os dados
        let trs = await preencherTabela();

        // 2. Processa os cálculos
        atualizarTabela(trs, calcularIMC, definirIMC);

        // 3. Aplica o visual
        realcarStatus(trs);
        
    } catch (erro) {
        console.error("Erro ao carregar a tabela:", erro);
    }
}

inicializar();