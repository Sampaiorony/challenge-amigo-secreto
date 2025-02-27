//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nomeAmigo = input.value;

    if(!nomeAmigo) {
        alert("Digite o nome do amigo!");
        return;
    }
    amigos.push(nomeAmigo);
    input.value = "";
    input.focus();
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }  
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("Nenhum amigo adicionado!");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];
}