export function calcularIMC(altura, peso){
    let IMC = peso / (altura * altura) 
    return IMC
}

export function definirIMC(IMC, tdStatus){
    
    if(IMC <= 18.5){
    // Abaixo do Peso
    tdStatus.textContent = "Abaixo do Peso"
    
} else if(IMC <= 24.9){
    // Peso Normal
    tdStatus.textContent = "Peso Normal"
} else if(IMC <= 29.9){
    // Sobrepeso
    tdStatus.textContent = "Acima do Peso"

} else if(IMC <= 34.9){
    // Obesidade Grau I
    tdStatus.textContent = "Obesidade Grau I"

} else if(IMC <= 39.9){
    // Obesidade Grau II
    tdStatus.textContent = "Obesidade Grau II"

} else{
    tdStatus.textContent = "Obesidade Grau III (Mórbida)"
}
}