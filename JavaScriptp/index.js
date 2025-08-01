

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

const form = document.getElementById("formCadastro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if(usuarios.length > 0){
    window.location.href = "login.html"
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    limparErros();
    mensagemSucesso.textContent = "";

    let formularioValido = true;

    if(nome.length < 4 ){
        mostrarErro("erroNome", "Nome deve ter pelo menos 4 letras")
        formularioValido = false
    }

    if(!validarEmail(email)){
        mostrarErro("erroEmail", "Email invalido");
        formularioValido = false
    }

    if(senha.length < 6){
        mostrarErro("erroSenha", "Senha deve ter pelo menos 6 letras");
        formularioValido = false;
    }

    if(senha !== confirmarSenha){
        mostrarErro("erroConfirmarSenha", "As senhas nao coincidem")
        formularioValido = false
    }

if(!formularioValido) return;

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

if(usuarios.some(user => user.email === email)) {
    mostrarErro("erroEmail", "email ja cadastradro")
    return
}

const novoUsuario = {nome, email, senha}

usuarios.push(novoUsuario);
localStorage.setItem("usuarios", JSON.stringify(usuarios))

console.log("Usuarios Cadastrados:", usuarios);

mensagemSucesso.textContent = "Cadastro realizado com sucesso";

 window.location.href = "login.html"

form.reset();


})

function mostrarErro(id, msg){
    document.getElementById(id).textContent = msg;
}

function limparErros(){
    document.querySelectorAll(".erro").forEach(e => e.textContent = "")
}

function validarEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);

}

