let salario = parseFloat(prompt("Digite o valor do seu salario: "))
let emprestimo = parseFloat(prompt('Digite o valor do seu emprestimo: '))
let conta = (salario/10)*3

if(conta >= emprestimo){
    console.log("Aprovado")
}
else{
    console.log(`Negado, o maximo permitido é ${conta}!!`)
}