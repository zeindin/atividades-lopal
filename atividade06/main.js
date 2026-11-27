//6. Etanol ou gasolina? Leia o preço dos dois combustíveis.
//  Se o etanol custar até 70% do preço da gasolina, ele compensa. Exiba qual abastecer e a diferença percentual.

let etanol = Number(prompt("Digite o valor do etanol: "))
let gasolina = Number(prompt("Digite o valor da gasolina: "))
let conta = (gasolina/etanol)

if(etanol < 0.70 * gasolina){
    console.log(`O etanol compensa, enquanto a gasolina custa R$${gasolina}, o etanol custa R$${etanol} e o percentual do etanol em relação a gasolina é: ${conta*100}%`)
}else{
    console.log(`O Etanol não compensa, ele custa mais de 70% em relação a gasolina`)
}