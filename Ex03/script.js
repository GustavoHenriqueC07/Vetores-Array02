let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
    let idade = Number(prompt(`Digite a idade de ${nome}:`));

    nomes.push(nome);
    idades.push(idade);
}

console.log("Pessoas menores de idade:");

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        alert(`${nomes[i]} - ${idades[i]} anos`);
    }
}