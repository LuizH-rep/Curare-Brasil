const form  = document.getElementById("formLogin");
const mensagemSucesso = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function(event){
    
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    limparErros();
    mensagemSucesso.textContent = "";

    let formValido = true;

    if(!validarEmail (email)){

mostrarErro("erroEmail", "Email invalido.")
formValido = false

    }

    if(senha.length < 6 ){
        mostrarErro("erroSenha", "Senha deve etr pelo menos 6 letras")
        formValido = false
    }

    if(!formValido){
        return
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if(!usuario){

        mostrarErro("erroSenha", "email ou senha incorreta")
        return

    }

console.log("usuarios cadastrados:", usuario)

    mensagemSucesso.textContent = `Bem vindo, ${usuario.nome}`
    form.reset();


window.location.href="home.html"

} )

function mostrarErro(id, msg){
    document.getAnimations(id).textContent = msg
}

function limparErros(){
    document.querySelectorAll(".erro").forEach(e => e.textContent = "")
}

function validarEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(email);

}





