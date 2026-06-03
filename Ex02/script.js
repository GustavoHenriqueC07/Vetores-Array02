let numeros = [];
let soma = 0;
for (let i = 0; i < 8; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
}
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
let media = soma / numeros.length;

alert(`A média é ${media}`);
console.log("Valores acima da média:");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > media) {
    console.log(numeros[i]);
}
}