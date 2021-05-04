
function cadastrarUser(){
    const formCadastro = document.getElementById('form-cadastro');
    const inputNome = document.getElementById('nome');
    const inputCpf = document.getElementById('cpf');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const inputSexo = document.getElementById('sexo');


    formCadastro.onsubmit= async (evento)=>{
        const name = inputNome.value
        const cpf = inputCpf.value
        const email = inputEmail.value
        const password = inputPassword.value
        const sexo = inputSexo.value

        await axios.post('http://localhost:3333/users', {
            name,
            cpf, 
            email,
            password,
            sexo
        })        
    }

}
cadastrarUser();