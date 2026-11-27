// Ingresso de R$ 40. Leia idade, se é estudante (s/n) e o dia da semana. Tem meia quem tem menos de 12 anos, 60 ou mais, ou é estudante.
//  Às terças, todos pagam meia. Exiba o valor final.

alert("O ingresso custa 40$")
let meia = prompt("Você é estudante? (s ou n): ")
let idade = Math.floor(prompt(("Digite sua idade: ")))
let dia = prompt("Qual é seu dia da semana? (Segunda-feira, Terça-feira etc..):")

if (idade < 12){
    console.log(`Você vai pagar R$${20}`)
} 
else if (meia == "s"){
    console.log("Você vai pagar R$20")
}
else if(idade > 12 && dia != "Terça-feira"){
    console.log('Você vai pagar R$40')
} 
else if(idade > 60){
    console.log("Voce vai pagar R$20")
}else if(idade < 60 && dia == "Terça-feira"){
    console.log('Voce vai pagar R$20')
} else if (dia == "Terça-feira"){
    console.log("Você vai pagar R$20")
} 
