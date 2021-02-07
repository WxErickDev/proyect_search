// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

// Eventos
document.addEventListener('DOMContentLoaded', () => {
   mostrarAutos(); // Muestra los automoviles

   // Llena las opciones de años
   llenarSelect();
});

// Funciones
function mostrarAutos() {
   autos.forEach((auto) => {
      const { marca, modelo, year, puertas, transmision, precio, color } = auto;

      const autoHTML = document.createElement('p');

      autoHTML.textContent = `
        ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
      `;

      // insertar en el HTML
      resultado.appendChild(autoHTML);
   });
}

// Genera los años del select
function llenarSelect() {
   for (let i = max; i >= min; i--) {
      const opcion = document.createElement('option');
      opcion.value = i; // agrega el atributo value
      opcion.textContent = i; // agrega el contenido

      //Agrega las opciones de año al select
      year.appendChild(opcion); // "opcion" es agregado a "year"
   }
}
