// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nuevoAmigo = (document.getElementById("amigo").value);
    console.log(nuevoAmigo);
    if (nuevoAmigo == "") {
        alert("Ingrese el nombre del amigo");
    } else {
        listaAmigos.push(nuevoAmigo);
        console.log(listaAmigos);
    }

    limpiarInput();
    mostrarNombres();
}

/*Se hace la función limpiarInput para eliminar un amigo de la 
informacion que escribio el usuario y se llama la funcion dentro
de la funcion de agregarAmigo para que cada vez que ingrese un nombre
sea borrado al dar click en el boton añadir*/
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}

/*Funcion que mostrara los nombres ingresados por el usuario*/

function mostrarNombres() {
    const listaElemento = document.getElementById("registroAmigos");

    listaElemento.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaElemento.appendChild(li);

    }
}

/* */

function amigoAleatorio() {
    if (listaAmigos.length == 0) {
        alert("No hay amigos en la lista");
    } else {
        nombreAleatorio = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        document.getElementById("resultado").textContent = nombreAleatorio;
        /*Muestra el nombre del amigo aleatorio en la consola*/
        console.log(nombreAleatorio);
    }

}

    function reiniciar() {
        listaAmigos = [];
        mostrarNombres();
        document.getElementById("resultado").textContent = '';
        limpiarInput();
    } 

