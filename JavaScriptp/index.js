const form = document.getElementById("formCadastro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

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

console.log("Usuarios Cadastraddos:", usuarios);

mensagemSucesso.textContent = "Cadastro realizado com sucesso";

window.location.href="login.html"

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

