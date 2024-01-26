

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
    pregunta: "Seleccionar un elemento y cambiar su contenido:",
    ayuda: "Es lo mismo que 2+2",
    respuesta: "4",
    distractores: ["2", "1", "3"],
  },
  {
    pregunta: "¿Cuanto es 5+5?",
    respuesta: "10",
    distractores: ["25", "9", "5"],
  },
];