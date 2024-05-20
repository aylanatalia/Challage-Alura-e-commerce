async function listarProdutos(){
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}   

async function criarProduto(nome, preco, imagem){
    const novoProduto = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    if(!novoProduto.ok){
        throw new Error('Nenhum produto foi adicionado' + novoProduto.statusText);
    }
    const novoProdutoConvertido = await novoProduto.json();
    return novoProdutoConvertido;
}

export const conectaAPI = {
    listarProdutos,
    criarProduto
}