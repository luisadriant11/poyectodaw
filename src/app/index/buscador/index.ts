// Importar hoja de estilos
import './style.css';


/* Completar la clase Plantilla */
import { Servicio } from "./Servicio";

addListeners();
let pal =((window.location.href).split("="))[1];

mostrarContenido();


function mostrarContenido(){
  fetch('https://thawing-earth-40899.herokuapp.com/servicios.json')
  .then( response => response.json())
  .then( data => {
    let arreglo = data.servicios;
    for (let objeto of arreglo) {
      if(pal.length>1){
        if(objeto["nombre"].includes(pal)){
        let servicio:Servicio = new Servicio(objeto["nombre"], objeto["descripcion"], objeto["precio"])
        document.getElementById("servicios").innerHTML += servicio.renderizarPlantilla()
      }
      }
      else{
        let servicio:Servicio = new Servicio(objeto["nombre"], objeto["descripcion"], objeto["precio"])
        document.getElementById("servicios").innerHTML += servicio.renderizarPlantilla()
      }
    }
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
}

function addListeners(){
  document.getElementById("botonBusqueda").addEventListener("click", refresh);
}

function refresh() {
  let palabra = (<HTMLInputElement>document.getElementById("busqueda")).value;
  let newURL;
  if (palabra.length < 2){
    newURL= (window.location.href).split("=")[0];
  }
  else{
    newURL= (window.location.href).split("=")[0]+"="+palabra;
  }
  document.location.replace(newURL)
}