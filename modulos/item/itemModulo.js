import { guardarProducto, obtenerProductos } from "../../control/miLocalStorange.js";
import { listaDeCompras } from "../../main.js";

export function item(id, titulo, urlImg, description, price) {

    let item = document.createElement('div');
    item.className = "item";

    let h3 = document.createElement('h3');
    h3.textContent = titulo;
    item.appendChild(h3);

    let img = document.createElement('img');
    img.src = urlImg;
    img.alt = titulo;
    item.appendChild(img);

    let p = document.createElement('p');
    p.textContent = description;
    item.appendChild(p);

    let span = document.createElement('span');
    span.textContent = "$" + price;
    item.appendChild(span);

    // Evento para agregar al carrito
    item.addEventListener('click', () => {
        // Recuperar productos y asegurarse de que sea un array
        let carritoLocalStorange = obtenerProductos();
        if (!Array.isArray(carritoLocalStorange)) {
            carritoLocalStorange = [];
        }

        // Agregar nuevo producto
        carritoLocalStorange.push({
            id: id,
            nombre: titulo,
            precio: price,
            img: urlImg
        });

        // Guardar en LocalStorage
        guardarProducto(carritoLocalStorange);
        console.log("Producto agregado al carrito:", { id, titulo, price });

        // Recargar página si quieres reflejar cambios
        location.reload();
    });

    return item;
}
