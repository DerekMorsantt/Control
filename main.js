 import { header } from "./components/header/headerComponent.js";
 import { seccion1 } from "./components/seccion1/seccion1Component.js";
 import { nav } from "./components/nav/navComponent.js";
 function seccion(){

    let seccion = document.createElement('section');

    // header
    seccion.appendChild(header());

    // seccion
    seccion.appendChild(seccion1());
     
    // nav
    seccion.appendChild(nav())
    return seccion;
    
}

document.body.appendChild(seccion());