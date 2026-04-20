function atualizarTabela(trs, calcularIMC, definirIMC) {
    for (let i = 0; i < trs.length; i++) {
        let filhos = trs[i].children;
        
        let altura = parseFloat(filhos[2].textContent);
        let peso = parseFloat(filhos[3].textContent);
        let tdIMC = filhos[4];
        let tdStatus = filhos[5];

        let imc = calcularIMC(altura, peso);
        tdIMC.textContent = imc.toFixed(2);
        
        definirIMC(imc, tdStatus);
    }
    return trs;
}

function realcarStatus(trs) {
    trs.forEach(tr => {
        let status = tr.querySelector('.info-status').textContent;
        
        // Aplica as classes do seu CSS (n1, n2, n3)
        if (status === 'Obesidade Grau III (Mórbida)' || status === 'Abaixo do Peso') {
            tr.classList.add('n1');
        } else if (status === 'Peso Normal') {
            tr.classList.add('n2');
        } else {
            tr.classList.add('n3');
        }
    });
}

export { atualizarTabela, realcarStatus };