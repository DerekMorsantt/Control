import { item } from "../../modulos/item/productoModulo.js";
import { productos } from "../../database/productos.js";

export function seccion1(){

    let seccion = document.createElement('section');

    seccion.className = "seccion-1";

    productos.forEach(element =>{
        seccion.appendChild(item(element.title,element.image,element.description,element.price))
    });
   
    return seccion;
}