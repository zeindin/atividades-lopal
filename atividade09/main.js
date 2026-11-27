let hora = Math.floor(prompt("Que horas são: "))
let minuto = Math.floor(prompt(("Quantos minutos são: ")))


if (hora < 6 && minuto < 60){

console.log(`Boa madrugada!! são ${hora} horas e ${minuto} minutos.`)

} 
else if (hora < 12 && minuto < 60){
    console.log(`Bom dia!! são ${hora} horas e ${minuto} minutos.`)
} else if(hora < 18 && minuto < 60){
    console.log(`Boa tarde!! são ${hora} horas e ${minuto} minutos.`)
}
else if(hora < 24 && minuto < 60){
    console.log(`Boa noite!! são ${hora} horas e ${minuto} minutos.`)
}
else{
    console.log("Horário ínvalido")
}