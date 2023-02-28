let produtos = data_produtos
let ulProdutos = document.querySelector(".lista-frutas")
let totalProducts = 0

let btnRemove = document.getElementsByClassName("btn-remove")

for (let i = 0; i < btnRemove.length; i++) {

    let botRemover = btnRemove[i]
    botRemover.addEventListener("click", function (event) {

        console.log(event.target.parentElement.parentElement)
    })
}

function listarProdutos(lista, refHTML) {
    for (let i = 0; i < produtos.length; i++) {
        let listaProdutos = lista[i]
        // console.log(listaProdutos)
        let template = criarListaProdutos(listaProdutos)

        refHTML.appendChild(template)
    }


}
listarProdutos(produtos, ulProdutos)

function criarListaProdutos(produto) {

    let nomeProduto = produto.produtoNome
    let produtoPreco = produto.preco
    let imgProduto = produto.imagem
    let quantProduto = produto.quantidade
    let categorias = produto.categoria


    let tagLi = document.createElement("li")
    tagLi.className = "card-frutas"
    tagLi.innerHTML = `
    
    <div class="img-produtos">

    <img src="./${imgProduto} " alt="foto ${nomeProduto}" title="foto ${nomeProduto} ">
    </div>

   <div class="frutas-dados">
    <h3>${nomeProduto}</h3>
    <p><strong>Preço: R$ ${produtoPreco}</strong></p>
    <p>Quantidade: ${quantProduto} </p>
    <button class = "btn-carrinho" id = ${produto.id}>Adicionar ao Carrinho</button>
   </div>
    
    
    `
    return tagLi


}

let divBtn = document.querySelectorAll(".btn-carrinho")

//console.log(divBtn)

for (let i = 0; i < divBtn.length; i++) {
    let btnCarrinho = divBtn[i]

    
    btnCarrinho.addEventListener("click", function (event) {

        let elementOBJ = event.target;


        let idProduto = parseInt(elementOBJ.id)

        let produto = procuraObJ(idProduto)

        if (!produto) {
            alert("produto não cadastrado!")

        } else {

            addCarrinho(produto)
        }

    })

}
function procuraObJ(id) {
    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]
        if (produto.id === id) {

            return produto
        }

    }
}

function addCarrinho(produto) {
     totalProducts++
     document.getElementById("quantidade-itens").innerHTML=`Total de produtos: ${totalProducts}  `
     document.querySelector(".pQtd-Carrinho").innerHTML =`${totalProducts}`
   

    let tagUlCarrinho = document.querySelector(".lista-carrinho")
    let nomeProduto = produto.produtoNome
    let produtoPreco = produto.preco
    let imgProduto = produto.imagem
    let quantProduto = produto.quantidade
    // let categorias = produto.categoria


    let tagLi = document.createElement("li")
    tagLi.className = "card-frutas"
    let tagButton = document.createElement("button")
    tagButton.innerText = "Remover"
    tagButton.className = "btn-remove"
    tagLi.innerHTML = `
  
  <div class="img-produtos">

  <img src="./${imgProduto} " alt="foto ${nomeProduto}" title="foto ${nomeProduto} ">
  </div>

 <div class="frutas-dados">
  <h3>${nomeProduto}</h3>
  <p><strong>Preço: R$ ${produtoPreco}</strong></p>
  <p>Quantidade: ${quantProduto} </p>
  
 </div>
  
  `
    // <button class = "btn-carrinho btn-remove" id = ${produto.id}>Remover</button>
    // função remover botão carrinho
    tagLi.appendChild(tagButton)
     
//------------------------------------------------------------//
    tagUlCarrinho.appendChild(tagLi)

    
    tagButton.addEventListener("click", function (event) {
        event.target.parentElement.remove()

        totalProducts--
        document.getElementById("quantidade-itens").innerHTML=`Total de produtos: ${totalProducts}  `
        document.querySelector(".pQtd-Carrinho").innerHTML =`${totalProducts}`
    })

   
}

//10.0.0.1  


// .lista-carrinho =  classe lista do carrinho

/*     <li class="card-frutas">
                    <div class="img-produtos">

                        <img src="./img/abacate.jpg" alt="foto abacate" title="foto abacate">
                    </div>

                    <div class="frutas-dados">
                        <h3>Abacate</h3>
                        <p><strong>Preço: R$ 2.80</strong></p>
                        <p>Quantidade: 1kg</p>
                        <button>Adicionar ao Carrinho</button>
                    </div>
                </li>
                */