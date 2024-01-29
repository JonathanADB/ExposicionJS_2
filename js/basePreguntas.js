

let baseDePreguntas = [
 
 

        {
          pregunta: "¿Cómo seleccionamos un elemento por su ID único?",
          ayuda: "por su ID",
          respuesta: 'let elemento = document.getElementById("miId");',
          distractores: [
            'let elemento = document.querySelectorById("miId");', 
          'let elemento = document.getElementsById("miId");',
           'const elemento = document.getElementByName("miId");'],
        },
        {
          pregunta: "¿Seleccionar un elemento y cambiar su contenido:",
          respuesta: 'const elemento = document.querySelector(`[data-etiqueta="miDato"]`)',
          distractores: [
            'const elemento = document.querySelectorByElement(`[data-etiqueta="miDato"]`)', 
            'const elemento = querySelectorByElement.document(`[data-etiqueta="miDato"]`)', 
            'const elemento = document.querySelectorBy(`[data-etiqueta="miDato"]`)'],
        },
      

  {
    pregunta: "¿Para que sirve add en classlist?",
    ayuda: "mismo significado",
    respuesta: "añadir",
    distractores: ["quitar", "remover", "montar"],
  },
  {
    pregunta: "¿Para que sirver .TextContent?",
    respuesta: "nos devuelve el contenido de texto de un elemento HTML",
    distractores: ["Añade lo que quieras", "Omite el texto correspondiente", "Modifica el texto seleccionado"],
  },
];