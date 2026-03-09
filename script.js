import {calcularImc, classificacao} from './cal.js'

let trs = document.querySelectorAll('tbody tr')

for (let index = 0; index < trs.length; index++) {
    let filho = trs[index].children

    let altura = parseFloat( filho[2].textContent)
    let peso = parseFloat(filho[3].textContent)
    let tdImc = filho[4]
    let tdStats = filho[5]

    let Imc = calcularImc(peso, altura)
    
    tdImc.textContent = Imc.toFixed(2)
    classificacao(Imc, tdStats)
}