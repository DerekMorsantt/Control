export function item(titulo,urlImg,Descripcion){

    let item = document.createElement('div');
    item.className = "item";

    item.addEventListener('click',colorVerde);
    let h1=document.createElement('h1');
    h1.textContent=titulo;   
    h1.className="h1";
    item.appendChild(h1);



     let img=document.createElement('img');
     img.src=urlImg;
     img.className="img";
     item.appendChild(img);

     let descripcion=document.createElement('p');
     descripcion.innerText=Descripcion;
     descripcion.className="Descripcion"
     item.appendChild(descripcion);

     


     
    return item;
}

function colorVerde (){
    this.classList.add("verde");
}