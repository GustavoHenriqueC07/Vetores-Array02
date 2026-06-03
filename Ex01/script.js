let nomes = [];
function adicionarNome() {
let nome = document.getElementById("nome").value;
if (nome === "") {
    alert("Digite um nome!");
    return;
    }

if (nomes.length < 7) {
    nomes.push(nome);

document.getElementById("contador").textContent =
`${nomes.length}/7 nomes cadastrados`;
document.getElementById("nome").value = "";
    } else {
        alert("Você já cadastrou os 7 nomes.");
    }
}
function mostrarInvertido() {
if (nomes.length < 7) {
    alert("Cadastre os 7 nomes primeiro.");
return;
}
let lista = "<h3>Nomes em ordem inversa:</h3><ul>";
for (let i = nomes.length - 1; i >= 0; i--) {
    lista += `<li>${nomes[i]}</li>`;
}
lista += "</ul>";
document.getElementById("resultado").innerHTML = lista;
}