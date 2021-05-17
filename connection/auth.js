function auth(){
    const formLogin = document.getElementById('login');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');

    formLogin.onsubmit= async ()=>{
        event.preventDefault()
        const email = inputEmail.value
        const password = inputPassword.value

       try{ 
           const resposta = await axios.post('http://localhost:3333/auth', {
            email,
            password
            });
            console.log(resposta)
            if(resposta.data.token){
                
            }    
        } catch (erro){
            
        }  
    }

}
auth();