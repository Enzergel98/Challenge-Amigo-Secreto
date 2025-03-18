//Lista de participantes
let listaAmigos = [];

//Captura el valor de los datos de entrada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Verificar y agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigos = document.getElementById('amigo').value;
  
    if (nombreAmigos === ""){
        alert('Por favor, inserte un nombre.');
        return;
    }  else if (listaAmigos.includes(nombreAmigos)) {
        alert('Este amigo ya está en la lista.');
        limpiarCaja();
        return;
    } else {
        listaAmigos.push(nombreAmigos);
        console.log (listaAmigos);
    }
    mostrarLista(); 
    limpiarCaja();
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Mostrar la lista en el HTML
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos'); 
    listaHTML.innerHTML = ""; 

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = listaAmigos[i]; 
        listaHTML.appendChild(li); 
    }
}