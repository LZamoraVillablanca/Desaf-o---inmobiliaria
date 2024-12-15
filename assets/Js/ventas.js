import { propiedadesVenta } from './data/propiedades.js'

const construirEdificios = (propiedades, containerId) => {
  const container = document.getElementById(containerId)
  const mainPage = propiedades
  for (const propiedad of mainPage) {
    const card = document.createElement("div")
    const pintar = `
        <div class = "dinamicCard" >
        <img src="${propiedad.foto}">
        <h3>${propiedad.nombre}</h3>
        <p>${propiedad.descripcion}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${propiedad.ubicacion}</p>
        <i class="fa-solid fa-bed"></i> ${propiedad.distribucion.split('|')[0].trim()} |
        <i class="fa-solid fa-toilet"></i> ${propiedad.distribucion.split('|')[1].trim()}
        <p>$${propiedad.precio}</p>
        <p>
          ${propiedad.fumadores 
            ? '<i class="fa-solid fa-joint"></i> Permitido fumar' 
            : '<i class="fa-solid fa-ban-smoking"></i> No se permite fumar'}
        </p>
        
        <p>
          ${propiedad.mascotas 
            ? '<i class="fa-solid fa-paw"></i> Se aceptan mascotas' 
            : '<i class="fa-solid fa-ban"></i> No se aceptan mascotas'}
        </p>
        
        
        </div >`
    card.innerHTML = pintar
    container.appendChild(card)
  }

}

construirEdificios(propiedadesVenta, 'venta');