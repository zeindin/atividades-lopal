let gb = Number(prompt("Quantos Gb você usa por mês"))
let g1 = ((gb - 5)*5)+30

if (gb > 20){
    console.log(`Melhor custo beneficio é: Plano B: R$30,00 fixo para 5GB, mais R$3,00 extra por GB, você pagará R$${g1}`)
}
else{
    console.log(`Melhor custo beneficio é: Plano A: R$ 55 fixo, até 20 GB. Você economizará cerca de R$${g1-gb}`)
}