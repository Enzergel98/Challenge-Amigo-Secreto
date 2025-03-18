// lista de participantes
let listaDeAmigos = [];

//Captura el valor de los datos de entrada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Verificar entradas y agregar a la lista
function agregarAmigo() {
    let nombreAmigos = document.getElementById('amigo').value;
  
    if (nombreAmigos === ""){
        alert('Por favor, inserte un nombre.');
        return;
    }  else if (listaDeAmigos.includes(nombreAmigos)) {
        alert('Este amigo ya está en la lista.');
        limpiarCaja();
        return;
    } else {
        listaDeAmigos.push(nombreAmigos);
        console.log (listaDeAmigos);
    }
    mostrarLista(); 
    limpiarCaja();
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}