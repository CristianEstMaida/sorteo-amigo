// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigosSorteados = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, inserte un nombre válido.');
        return;
    }
    amigos.push(nombre);
    limpiarCaja();
    console.log('Lista de amigos actualizada:', amigos);
    actualizarListaAmigos(amigos);
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

function actualizarListaAmigos(amigos) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let nuevoItem = document.createElement('li');
        nuevoItem.textContent = amigos[i];
        listaAmigos.appendChild(nuevoItem);    
    }
    return;
}

function sortearAmigo() {
    let resultadoElemento = document.getElementById('resultado');
    
    if (amigos.length === 0) {
      alert("No hay amigos para sortear.");
      return;
    }

    if (listaAmigosSorteados.length == amigos.length) {
        resultadoElemento.innerHTML = 'Ya se sortearon todos los amigos posibles';    
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        //Si el numero generado está incluido en la lista 
        if (listaAmigosSorteados.includes(amigoSorteado)) {
            sortearAmigo();
        } else {
            resultadoElemento.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
            listaAmigosSorteados.push(amigoSorteado);
        }
    }
    return;
}