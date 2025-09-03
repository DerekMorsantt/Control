import { obtenerProductos } from "../../control/miLocalStorange.js";

export function listaCarrito() {
    let seccion = document.createElement('section');
    seccion.className = "carrito"; // clase para el CSS

    let recuperarProductos = obtenerProductos();

    recuperarProductos.forEach(element => {
        // div general para el producto
        let divProducto = document.createElement('div');
        divProducto.className = "producto";

        // div para la imagen
        let divImagen = document.createElement('div');
        divImagen.className = "producto-imagen";

        let img = document.createElement('img');
        img.src = element.img;
        img.alt = element.nombre;

        divImagen.appendChild(img);

        // p para nombre
        let pNombre = document.createElement('p');
        pNombre.className = "producto-nombre";
        pNombre.textContent = element.nombre;

        // p para precio
        let pPrecio = document.createElement('p');
        pPrecio.className = "producto-precio";
        pPrecio.textContent = `$${element.precio}`;

        // añadir todo al div en general
        divProducto.appendChild(divImagen);
        divProducto.appendChild(pNombre);
        divProducto.appendChild(pPrecio);

        // añadir al section
        seccion.appendChild(divProducto);
    });

    return seccion;
}
