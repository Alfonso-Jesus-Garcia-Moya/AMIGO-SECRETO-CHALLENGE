// AMIGO SECRETO CHALLENGE
// Crear un array para almacenar los nombres

let listaDeAmigos = [];

//Implementa una función para agregar amigos - Capturar el valor del campo de entrada

let listaDeNombres = document.getElementById("listaAmigos");
let elementoAmigoSorteado = document.getElementById("resultado");

// Agregar los nombres de los amigos
function agregarAmigo() {
    let nombreDeAmigos = document.getElementById("amigo").value;

//Validar la entrada

    if(nombreDeAmigos === ""){
        alert("Por favor, inserte un nombre.");
        return;
//Actualizar el array de amigos
    } else {
        listaDeAmigos.push(nombreDeAmigos);

//limpia el campo de entrada
        document.getElementById("amigo").value = "";
    }
//Limpiar la lista existente
        listaDeNombres.innerHTML = "";

//Iterar sobre el arreglo
        for(let i = 0; i < listaDeAmigos.length; i++){
//Agregar elementos a la lista
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = listaDeAmigos[i];
        listaDeNombres.appendChild(nuevoElemento);    
    }
}

// Sortear el amigo secreto
function sortearAmigo() {
    if(listaDeAmigos.length > 0) {
//Generar un índice aleatorio
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
//Mostrar el resultado
        elementoAmigoSorteado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
//Validar que haya amigos disponibles:
    } else {    
        alert("Debes ingresar al menos un nombre para poder sortear");
    }
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    return;
}