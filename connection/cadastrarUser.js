
function cadastrarUser(){
    const formCadastro = document.getElementById('form-cadastro');
    const inputNome = document.getElementById('nome');
    const inputCpf = document.getElementById('cpf');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const inputSexo = document.getElementById('sexo');


    formCadastro.onsubmit= async (evento)=>{
        evento.preventDefault()
        const name = inputNome.value
        const cpf = inputCpf.value
        const email = inputEmail.value
        const password_has = inputPassword.value
        const sexo = inputSexo.value
        console.log(name);
        console.log(email);
        console.log(typeof email);
        console.log(password_has);
        console.log(typeof password_has);

        try{

            const response = await axios.post('http://localhost:3333/users', {
                 name,
                 cpf, 
                 email,
                 password_has,
                 sexo
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