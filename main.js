 import { header } from "./components/header/headerComponent.js";
 import { seccion1 } from "./components/seccion1/seccion1Component.js";
 
 function seccion(){

    let seccion = document.createElement('section');

    // header
    seccion.appendChild(header());

    // seccion
    seccion.appendChild(seccion1());
    
    return seccion;
    
}

document.body.appendChild(seccion());