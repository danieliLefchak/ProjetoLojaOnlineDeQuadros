let imgProdutos = document.getElementById('imgProdutos');
let proxImg = document.getElementsByClassName('imgProdTroc');

proxImg[0].onclick = function(){
    imgProdutos.src = proxImg[0].src;
}
proxImg[1].onclick = function(){
    imgProdutos.src = proxImg[1].src;
}

proxImg[2].onclick = function(){
    imgProdutos.src = proxImg[2].src;
}

proxImg[3].onclick = function(){
    imgProdutos.src = proxImg[3].src;
}

