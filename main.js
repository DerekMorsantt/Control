import { header } from "./components/header/headerComponent.js";
import { seccion1 } from "./components/seccion1/seccion1Component.js";
import { nav } from "./components/nav/navComponent.js";

let listaDeCompras = localStorage.getItem("carrito");

function seccion(){

    let seccion = document.createElement('section');

    // LocalStorange
  
    if (!listaDeCompras) {
        listaDeCompras = [];
        localStorage.setItem("carrito", JSON.stringify(listaDeCompras));
    } 
    console.log(listaDeCompras);
    
    //header
    seccion.appendChild(header());
    
    //seccion
    seccion.appendChild(seccion1());
    
    //nav
    seccion.appendChild(nav());
    
    return seccion;
}

document.body.appendChild(seccion());

export {listaDeCompras};