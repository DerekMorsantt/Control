
import { guardarProducto, obtenerProductos } from "../../control/miLocalStorange.js";
import { listaDeCompras } from "../../main.js";

export function item(id,titulo,urlImg,description,price){

    let item = document.createElement('div');
    item.className = "item";

    let h3 = document.createElement('h3');
    h3.textContent = titulo;
    item.appendChild(h3);
    
    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    let p = document.createElement('p');
    p.textContent = description;
    item.appendChild(p);

    let span = document.createElement('span');
    span.textContent = "$" + price;
    item.appendChild(span);

    item.addEventListener('click', ()=>{
        let carritoLocalStorange = obtenerProductos();
        console.log("carrito: ", carritoLocalStorange);
        
        carritoLocalStorange.push({id:id,precio:price,nombre:titulo, img:urlImg});
        guardarProducto(carritoLocalStorange);
        console.log("Producto en LocalStorange");
        location.reload();
});

    return item;
}