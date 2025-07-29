function header(){
    let header = document.createElement('header');
    header.className = "header";
    
    let titulo = document.createElement('h1');
    titulo.className = "titulo1";
    titulo.innerText = "DerekMorsant";
    header.appendChild(titulo);

    let div = document.createElement('div');
    div.className = "div";
    div.innerText = "😵";
    header.appendChild(div);

    return header;
}

export { header }