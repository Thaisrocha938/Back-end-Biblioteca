
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
                                <a href="#carrinho" class="btn btn-success"><img src="./images/cart-plus.svg" alt="add carrinho" width="16" height="16" /></a>
                     
                            </div>
                    </div>`;
                    return resposta.data;
                });
                event.preventDefault()
            })
	        .catch(erro => console.error(erro));
}
listarProduto();
//           <a href="#" class="btn btn-primary" id="editar"><img src="https://img.icons8.com/pastel-glyph/64/000000/edit--v2.png" width="16" height="16"/></a>
