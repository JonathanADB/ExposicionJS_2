"use strict"



/* //ejemplo 1 byID
// Obtener el elemento con el ID "miElemento"
let elemento = document.getElementById("miElemento");
// Hacer algo con el elemento, por ejemplo, cambiar su contenido
elemento.innerHTML = "¡Hola, mundo!"; */




//ejemplo 2 byTagname

/*   

Es importante mencionar que getElementsByTagName devuelve todos los elementos con el nombre de la etiqueta especificada, 
en el orden en que aparecen en el documento. Si no hay elementos con esa etiqueta, la función devuelve una colección vacía.
Aquí hay un ejemplo de cómo puedes verificar si hay elementos antes de realizar operaciones:

let parrafos = document.getElementsByTagName("p");

if (parrafos.length > 0) {
   // Hay al menos un párrafo, hacer algo con ellos
   for (var i = 0; i < parrafos.length; i++) {
      parrafos[i].innerHTML = "Nuevo contenido para el párrafo " + (i + 1);
   }
} else {
   console.error("No se encontraron elementos <p> en la página.");
}*/



/*
let parrafos = document.getElementsByTagName("p");

// Iterar a través de la colección de párrafos
for (var i = 0; i < parrafos.length; i++) {
    // Hacer algo con cada párrafo, por ejemplo, cambiar su contenido
    parrafos[i].innerHTML = "Este es un nuevo contenido para el párrafo " + (i + 1);
 }
 */