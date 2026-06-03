let vetor1 = [];
let vetor2 = [];
let intersecao = [];

// Ler vetor 1
for (let i = 0; i < 5; i++) {
    vetor1.push(Number(prompt(`Vetor 1 - Digite o ${i + 1}º número:`)));
}

// Ler vetor 2
for (let i = 0; i < 5; i++) {
    vetor2.push(Number(prompt(`Vetor 2 - Digite o ${i + 1}º número:`)));
}

// Encontrar a interseção
for (let i = 0; i < vetor1.length; i++) {
    if (
        vetor2.includes(vetor1[i]) &&
        !intersecao.includes(vetor1[i])
    ) {
        intersecao.push(vetor1[i]);
    }
}

alert(`Vetor 1: ${vetor1}`);
alert(`Vetor 2: ${vetor2}`);
alert(`Interseção: ${intersecao}`);