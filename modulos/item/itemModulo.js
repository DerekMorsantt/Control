export function item(){

    let item = document.createElement('div');
    item.className = "item";


    let h1=document.createElement('h1');
    h1.innerText="Valorant";   
    h1.className="h1";
    item.appendChild(h1);



     let img=document.createElement('img');
     img.src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Valorant_logo_-_pink_color_version.svg";
     img.className="img";
     item.appendChild(img);

     let descripcion=document.createElement('p');
     descripcion.innerText="Hitreg inconsistente, personajes rotos y un anti-cheat invasivo. Comunidad tóxica y mecánicas frustrantes. ¡Puro estrés! Hay mejores FPS.";
     descripcion.className="Descripcion"
     item.appendChild(descripcion);

     


     
    return item;
}