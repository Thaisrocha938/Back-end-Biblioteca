
function cadastrarUser(){
    const formCadastro = document.getElementById('form-cadastro');
    const inputNome = document.getElementById('nome');
    const inputPreco = document.getElementById('preco');
    const inputDescricao = document.getElementById('descricao');


    formCadastro.onsubmit= async ()=>{
        event.preventDefault()
        const nome = inputNome.value
        const preco = parseFloat(inputPreco.value)
        const descricao = inputDescricao.value
        console.log(nome);
        console.log(preco);
        console.log(typeof preco);
        console.log(descricao);
        console.log(typeof descricao);

        try{

            const response = await axios.post('http://localhost:3333/produto', {
                 nome,
                 preco,
                 descricao
             })
             console.log(response); 
             if(response.data[1] == true){
                document.getElementById('card-formulario').innerHTML += 
               ` <div class="alert alert-success" role="alert">
                    Cadastro realizado!
                </div>`;
             } else if(response.data[1] == false){
                document.getElementById('card-formulario').innerHTML += 
                ` <div class="alert alert-warning" role="alert">
                     Verifique suas informações!
                 </div>`;
             }
        } catch(error){
            console.log(error);
            document.getElementById('card-formulario').innerHTML += 
                ` <div class="alert alert-danger" role="alert">
                     Erro na consolidação das informações!
                 </div>`;
        }
    }

}
cadastrarUser();