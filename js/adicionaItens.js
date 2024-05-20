import { conectaAPI } from "./conectaApi.js";

const formulario = document.querySelector('[data-form]');

async function criarItem(evento){
    evento.preventDefault();

    const nome = document.querySelector('[data-form-nome]').value;
    const preco = document.querySelector('[data-form-preco]').value;
    const imagem = document.querySelector('[data-form-imagem]').value;

    console.log('Dados do produto:', {nome, preco, imagem});

    try{
        await conectaAPI.criarProduto(nome, preco, imagem);
        alert('Produto adicionado');
    }catch(error){
        console.error('Erro ao criar produto', error);
    }

    window.location.reload(true);
}

formulario.addEventListener("submit", evento => criarItem(evento));