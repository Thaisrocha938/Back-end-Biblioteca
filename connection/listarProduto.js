
function listarProduto(){

            axios.get('http://localhost:3333/produto')
	        .then(resposta => {
                console.log(resposta.data)
                
                resposta.data.forEach((element, index, arrey) => {
                    console.log("no ["+ index+"] = "+element.nome)
                    document.getElementById('cardapio').innerHTML += 
                    `<div class="card col-sm">
                            <div class="card-body text-center col">
                                <h5 class="card-title">${element.nome}</h5>
                                <p class="card-text">${element.descricao}</p>
                                <h3 class="card-title">R$${element.preco}</h3>
                                <a href="#" class="btn btn-success"><img src="./images/cart-plus.svg" alt="carrinho" width="16" height="16" /></a>
                            </div>
                    </div>`;
                });
            })
	        .catch(erro => console.error(erro));
}
listarProduto();