let compra = Math.floor(prompt('Digite o valor da compra: '))
let peso = Math.floor(prompt('Digite o peso da compra: '))

if (compra >= 250) {
    console.log("O seu frete sera grátis")
} else if(peso <= 1){
    console.log(`Você vai pagar R$${compra+15}`)
} else if (peso <= 5){
    console.log(`Você vai pagar R$${compra+25}`)
} else if(peso > 5){
    let excedente = peso - 5
    let excedente01 = excedente * 4
    console.log(`Você vai pagar R$${compra+25+excedente01}`)
}
