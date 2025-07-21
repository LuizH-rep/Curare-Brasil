const tema = localStorage.getItem("tema");

if (tema === "escuro") {
  document.body.style.backgroundColor = "rgb(15, 23, 42)";
  document.body.style.color = "rgb(255, 251, 245)";

   document.getElementById("container").style.backgroundColor = "rgb(3, 169, 244)"
  document.getElementById("container").style.color = "rgb(255, 251, 245)"
  document.getElementById("Lbt").style.backgroundColor = "rgb(55, 71, 79)"
    document.getElementById("Lbt").style.color = "rgb(255, 251, 245)"
 
} 

else {
  document.body.style.backgroundColor = "rgb(255, 243, 224)";
  document.body.style.color = "rgb(38, 50, 56)";

  document.getElementById("container").style.backgroundColor = "rgb(245, 124, 0)"
  document.getElementById("container").style.color = "rgb(38, 50, 56)"
  document.getElementById("Lbt").style.backgroundColor = "rgb(255, 224, 178)"
    document.getElementById("Lbt").style.color = "rgb(38, 50, 56)"

}


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





