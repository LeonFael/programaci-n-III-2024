//Objeto Persona
const persona = {
    nombre: 'leon',
    edad: 40,
    ciudad: 'Bogotá'
};

// Función para mostrar información
function mostrarInformacion() {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Ciudad: ${persona.ciudad}`);
}

// Llamar a la función para mostrar la información
mostrarInformacion();



    const infoSection = document.querySelector('.information.container');

// Recorrer todos los elementos de información
for (const informationElement of infoSection.children) {
  const numberElement = informationElement.querySelector('h3');
  const textElement = informationElement.querySelector('p');

  // Cambiar el tamaño de fuente y el color del texto según el número
  if (Number(numberElement.textContent) > 100) {
    numberElement.style.fontSize = '24px';
    numberElement.style.color = 'tomato';
  } else if (Number(numberElement.textContent) > 50) {
    numberElement.style.fontSize = '18px';
    numberElement.style.color = 'orange';
  } else {
    numberElement.style.fontSize = '16px';
    numberElement.style.color = 'black';
  }

  // Agregar un icono según el tipo de propiedad
  if (textElement.textContent === 'Casas') {
    textElement.innerHTML += `<i class="fa fa-home"></i>`;
  } else if (textElement.textContent === 'Casas de playa') {
    textElement.innerHTML += `<i class="fa fa-umbrella-beach"></i>`;
  } else if (textElement.textContent === 'Departamentos') {
    textElement.innerHTML += `<i class="fa fa-building"></i>`;
  } else {
    textElement.innerHTML += `<i class="fa fa-question"></i>`;
  }
}

