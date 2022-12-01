//obrigatoriamente o addEventListener tem que ter um evento seja de click mouse ou qualquer outro evento que o usuario possa fazer
document.querySelector('#btnCar').addEventListener('click',(e) => {
    e.preventDefault();
    AdicionaProdutoAoCarrinho();
    window.location.href = "@{/adicCarrinho}"; 
});

document.querySelector('#btnComp').addEventListener('click',(e) => {
    e.preventDefault();
    AdicionaProdutoAoCarrinho();
});

const products = [];
function AdicionaProdutoAoCarrinho(){

    document.querySelectorAll('#Cardprod').forEach((linhas)=>{
        let info ={
            imgProdutos:linhas.querySelector('#imgProdutos').getAttribute('src'),
            tituloCard:linhas.querySelector('#tituloCard').textContent,
            preco:linhas.querySelector('#preco').textContent,
            precoSemDesc:linhas.querySelector('#precoSemDesc').textContent,
            quant:linhas.querySelector('#quant').value
        }
        products.push(info);
    });

    alert("Foram adicionados " + document.querySelector('#quant').value + " itens no carrinho");
    localStorage.setItem('ListaCarrinho', JSON.stringify(products));
}






