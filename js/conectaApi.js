async function listarProdutos(){
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}   

async function criarProduto(nome, preco, imagem, id){
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
        throw new Error('Nenhum produto foi adicionado');
    }
    const novoProdutoConvertido = await novoProduto.json();
    return novoProdutoConvertido;
}

async function excluirItem(itemId){
    try{
        const del = await fetch(`http://localhost:3000/produtos/${itemId}`,{
            method: 'DELETE',
        });
        const delConvertida = await del.json();
        console.log(delConvertida);
    }catch(error){
        console.error('Erro ao deletar produto', error);
        throw error;
    }
}

export const conectaAPI = {
    listarProdutos,
    criarProduto,
    excluirItem
}