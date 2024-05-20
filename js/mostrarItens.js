import { conectaAPI } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

export default function constroiCard(nome, preco, imagem){
    const item = document.createElement("div");
    item.className = "produto__item";
    item.innerHTML = `
    <div class="card">
    <img class="card--imagem" src="${imagem}" alt="Imagem do produto">
    <div class="card--info">
    <p>${nome}<p>
    <div class="card--value">
    <p>Preço: R${preco}<p>
    <img src="../imagens/lixeira.png" alt="Icone lixeira"></img>
    </div>
    </div>
    </div>  
    `;
    return item;
}

async function listarProdutos(){
    try{
        const listaAPI = await conectaAPI.listarProdutos();
        listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem)));
    }catch{
        lista.innerHTML = `<h2 class="mensagem">Nenhum item adicionado</h2>`; 
    }
}

listarProdutos();

