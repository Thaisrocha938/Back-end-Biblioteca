function auth(){
    const formLogin = document.getElementById('login');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');

    formLogin.onsubmit= async ()=>{

        const email = inputEmail.value
        const password = inputPassword.value

        await axios.post('http://localhost:3333/users', {
            email,
            password
        })        
    }

}
auth();