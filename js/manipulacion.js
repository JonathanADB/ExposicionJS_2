// Acceder al párrafo por su ID
let parrafo1 = document.getElementById('miParrafo');

// Acceder al botón por su ID
let boton = document.getElementById('miBoton');

// Añadir un evento al botón para cambiar el color del párrafo
boton.addEventListener('click', function() {
  // Generar un color aleatorio en formato hexadecimal
  let nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  // Manipular el estilo del párrafo para cambiar el color de fondo
  parrafo1.style.backgroundColor = nuevoColor;
});






//segundo ejemplo
// Acceder al contenedor por su ID
let contenedor = document.getElementById('contenedor');

// Acceder al párrafo por su ID
let parrafo = document.getElementById('miParrafo');

// Acceder a los botones por sus ID
let agregarBoton = document.getElementById('agregarBoton');
let eliminarBoton = document.getElementById('eliminarBoton');

// Añadir evento para agregar un nuevo elemento al hacer clic en el botón "Agregar Elemento"
agregarBoton.addEventListener('click', function() {
  // Crear un nuevo elemento div
  let nuevoElemento = document.createElement('div');

  // Establecer atributo de clase al nuevo elemento
  nuevoElemento.setAttribute('class', 'nuevoElemento');

  // Agregar contenido HTML al nuevo elemento
  nuevoElemento.innerHTML = 'Nuevo Elemento';

  // Añadir el nuevo elemento como hijo del contenedor
  contenedor.appendChild(nuevoElemento);
});

// Añadir evento para eliminar el último elemento al hacer clic en el botón "Eliminar Elemento"
eliminarBoton.addEventListener('click', function() {
  // Obtener el último elemento hijo del contenedor
  let ultimoElemento = contenedor.lastElementChild;

  // Eliminar el último elemento del contenedor
  contenedor.removeChild(ultimoElemento);
});

// Añadir evento para cambiar la clase del párrafo al hacer clic en él
parrafo.addEventListener('click', function() {
  // Alternar la clase 'resaltado' en el párrafo
  parrafo.classList.toggle('resaltado');
});

// Añadir evento para mostrar la clase actual del párrafo al hacer clic en el botón
eliminarBoton.addEventListener('click', function() {
  // Obtener la clase actual del párrafo y mostrarla en la consola
  let claseActual = parrafo.getAttribute('class');
  console.log('Clase actual del párrafo:', claseActual);
});
