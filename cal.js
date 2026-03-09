export function calcularImc(peso, altura) {
    return peso/(altura*altura)
}

export function classificacao(Imc, tdStats) {
    if(Imc < 18.5) {
        tdStats.textContent = "Abaixo do Peso"
    } else if(Imc < 25.0) {
        tdStats.textContent = "Peso normal"
    } else if(Imc < 30.0) {
        tdStats.textContent = "Sobrepeso"
    } else if(Imc < 35.0) {
        tdStats.textContent = "Obesidade Grau I"
    } else if(Imc < 40.0) {
        tdStats.textContent = "Obesidade Grau II"
    } else{
        tdStats.textContent = "Obesidade Grau III (Mórbida)"
    }
}