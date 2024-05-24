import { conectaAPI } from "./conectaApi.js";
import constroiCard from "./mostrarItens.js";

const prodList = document.querySelector('#lista-produtos');

prodList.addEventListener('click', function(evento){
    const elementoClicado = evento.target;
    if(elementoClicado.classList.contains('icone-excluir')){
        const btn = elementoClicado.parentNode;
        const preco = btn.parentNode;
        const sobre = preco.parentNode;
        const prod = sobre.parentNode;
        const id = elementoClicado.id;
        conectaAPI.excluirItem(id);
        prod.remove();
    }
    
})