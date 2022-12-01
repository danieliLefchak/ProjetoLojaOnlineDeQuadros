class newProduto {
    constructor(imgProdutos, tituloCard, preco, precoSemDesc, quant) {
        this.imgProdutos = imgProdutos;
        this.tituloCard = tituloCard;
        this.precoSemDesc = precoSemDesc;
        this.preco = preco;
        this.quant = quant
    }
}

function getStorageProdutosCarrinho(){
    return JSON.parse(localStorage.getItem('ListaCarrinho')) || [];
}

let itemsTable = getStorageProdutosCarrinho();
itemsTable.forEach(prod =>{
    product = new newProduto(prod.imgProdutos,prod.tituloCard,prod.preco,prod.precoSemDesc,prod.quant);
    document.querySelector('#tbProdCarrinho').innerHTML += novoProdutoCarrinho(product);
});

function novoProdutoCarrinho(product){
    let tr = `
        <tr>
            <td><img id="imgProdCarrinho" src="${product.imgProdutos}" alt="imgProdCarrinho" type="imgProdCarrinho" class="imgProdCarrinho imgProdTroc"></td>
            <td><h5 id="tituloProdCar" class="tituloProdCar">${product.tituloCard}</h5></td>
            <td>
                <h4 id="precoProdCar" class="precoProdCar mt-1">${product.preco}</h4>
                <h4 id="precoProdCarSemDesc" class="text-secondary"><s>${product.precoSemDesc}</s></h4>
            </td>
            <td>
                <div> 
                    <input class="quantProdCar text-center" type="number" name="quant" id="quantProdCar" value="${product.quant}">
                </div>
            </td>
            <td>
                <div>
                    <a href="#" class="btnConta btn mt-1" id="btnContar">
                        <i class="fa fa-check"></i>
                    </a> 
                    <a href="#" class="btnRemove btn mt-1" id="btnRem">
                        <i class="fa fa-trash"></i>
                    </a> 
                </div>
            </td>
        </tr>
    `
    
    return tr;
    
}

let rem = document.querySelectorAll('.btnRemove');
rem.forEach((doc)=>{
    doc.addEventListener('click', (e) => {
        e.preventDefault();
        let tr = e.target.parentNode.parentNode.parentNode.parentNode;
        tr.remove();
        SalvarCarrinho();
    });
});


let cont = document.querySelectorAll('.btnConta');
cont.forEach((doc)=>{
    doc.addEventListener('click', (e)=>{
        e.preventDefault();
        SalvarCarrinho();
        CalcularSub();
    }); 
});

document.querySelector('#btnCar').addEventListener('click',(e) => {
    e.preventDefault();
    alert("Compra finalizada com sucesso");
});  

const products = [];
function SalvarCarrinho(){

    document.querySelectorAll('#tbProdCarrinho').forEach((linhas)=>{
        let info ={
            imgProdCarrinho:linhas.querySelector('#imgProdCarrinho').getAttribute('src'),
            tituloProdCar:linhas.querySelector('#tituloProdCar').textContent,
            precoProdCar:linhas.querySelector('#precoProdCar').textContent,
            precoProdCarSemDesc:linhas.querySelector('#precoProdCarSemDesc').textContent,
            quantProdCar:linhas.querySelector('#quantProdCar').value
        }
        products.push(info);
    });

    alert("Foram salvos " + document.querySelector('#quantProdCar').value + " itens no carrinho");
    localStorage.setItem('CarrinhoSalvos', JSON.stringify(products));
}

function getSalvarCarrinho(){
    return JSON.parse(localStorage.getItem('CarrinhoSalvos')) || [];
}

let somaSub = 0;
let acumulador = "";
let recebeQtde = 0;
function CalcularSub(){
    let qn = getStorageProdutosCarrinho();

    qn.forEach((e)=>{
        recebeQtde = e.quant; 
    })

    let itemsSubResumo = {}
    if(document.querySelector('#quantProdCar').value !== recebeQtde){
        itemsSubResumo = getSalvarCarrinho();    
        itemsSubResumo.forEach((el)=> {
            acumulador = "";
            acumulador = el.precoProdCar * el.quantProdCar;      
            somaSub = 0;  
            somaSub += acumulador;
        });
    }else{
        itemsSubResumo = getStorageProdutosCarrinho();
        itemsSubResumo.forEach((el)=> {
            acumulador = "";
            acumulador = el.preco * el.quant;    
            somaSub = 0;    
            somaSub += acumulador;
        });
    }

    document.querySelector('#subtotal').innerHTML = somaSub;    
}

CalcularSub();

let desconto = 0;
let acumDesc = "";
function calcularDesconto(){
    let itemsDesconto = getStorageProdutosCarrinho();

    itemsDesconto.forEach((v)=>{
        acumDesc = v.precoSemDesc - v.preco;
        desconto += acumDesc;
    });

    document.querySelector('#desc').innerHTML = desconto;
}

calcularDesconto();

let frete = 0;
let acumFrete = "";
function calcularFrete(){

    document.querySelector('#valFrete').addEventListener('focusout', (e)=>{
        e.preventDefault();

        //let valoSub = CalcularSub();
        let valNomr = document.querySelector('#valFreteNorm').textContent;
        let valExpre = document.querySelector('#valFreteExp').textContent;

        let qn = getStorageProdutosCarrinho();

        qn.forEach((e)=>{
            recebeQtde = e.quant; 
        });

        if (document.getElementById('freteNorm').checked) {
            if(document.querySelector('#quantProdCar').value !== recebeQtde){
                let itemsFrete = getSalvarCarrinho();
                itemsFrete.forEach((f)=>{
                    acumFrete = ""
                    acumFrete = ((f.precoProdCar * f.quantProdCar) + Number(valNomr));
                    frete = 0
                    frete += acumFrete;
                });
            } else{
                itemsFrete = getStorageProdutosCarrinho()
                itemsFrete.forEach((f)=> {
                    acumFrete = ""
                    acumFrete = ((f.preco * f.quant) + Number(valNomr));        
                    frete = 0
                    frete += acumFrete;
                });
            }
        } else if(document.getElementById('freteExpr').checked){
            if(document.querySelector('#quantProdCar').value !== recebeQtde){
                let itemsFrete = getSalvarCarrinho();
                itemsFrete.forEach((f)=>{
                    acumFrete = "";
                    acumFrete = ((f.precoProdCar * f.quantProdCar) +  Number(valExpre));
                    frete = 0;
                    frete += acumFrete;
                });
            } else{
                itemsFrete = getStorageProdutosCarrinho()
                itemsFrete.forEach((f)=> {
                    acumFrete = "";
                    acumFrete = ((f.preco * f.quant) + Number(valExpre));        
                    frete = 0;
                    frete += acumFrete;
                });
            }
        }

        document.querySelector('#total').innerHTML = frete;
    }); 
}

calcularFrete();




