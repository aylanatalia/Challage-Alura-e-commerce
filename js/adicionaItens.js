import { conectaAPI } from "./conectaApi.js";

const formulario = document.querySelector("[data-form]");

async function criarItem(evento){
    evento.preventDefault();
 
    const nome = document.querySelector("[data-form-nome]").value.trim();
    const preco = document.querySelector("[data-form-preco]").value.trim();
    const imagem = document.querySelector("[data-form-imagem]").value.trim();

    if(!nome || !preco || !imagem){
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try{
        await conectaAPI.criarProduto(nome, preco, imagem);
        alert('Produto adicionado');
    }catch(error){
        console.error('Erro ao criar produto', error);
        alert('Erro ao adicionar o produto. Por favor tente mais tarde');
    }

    
}

formulario.addEventListener("submit", evento => criarItem(evento));