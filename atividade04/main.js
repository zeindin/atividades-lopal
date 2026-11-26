let valor = parseFloat(prompt("Digite o valor que você vai pagar: "));
let resto = valor;

let cem1 = Math.floor(resto / 100);
resto = resto % 100;

let cin1 = Math.floor(resto / 50);
resto = resto % 50;

let vinte1 = Math.floor(resto / 20);
resto = resto % 20;

let dez1 = Math.floor(resto / 10);
resto = resto % 10;

let cinco1 = Math.floor(resto / 5);
resto = resto % 5;

let dois1 = Math.floor(resto / 2);
resto = resto % 2;

let um1 = Math.floor(resto / 1);

console.log(`Valor inicial: ${valor}`);

if (cem1 > 0) {
    console.log(`Foram usadas ${cem1} moedas/notas de 100`);
}
if (cin1 > 0) {
    console.log(`Foram usadas ${cin1} moedas/notas de 50`);
}
if (vinte1 > 0) {
    console.log(`Foram usadas ${vinte1} moedas/notas de 20`);
}
if (dez1 > 0) {
    console.log(`Foram usadas ${dez1} moedas/notas de 10`);
}
if (cinco1 > 0) {
    console.log(`Foram usadas ${cinco1} moedas/notas de 5`);
}
if (dois1 > 0) {
    console.log(`Foram usadas ${dois1} moedas/notas de 2`);
}
if (um1 > 0) {
    console.log(`Foram usadas ${um1} moedas/notas de 1`);
}