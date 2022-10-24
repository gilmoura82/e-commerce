function validaCampos() {

  let nome = document.querySelector("#nome");
  let email = document.querySelector("#email");
  let assunto = document.querySelector("#assunto");
  let mensagem = document.querySelector("#mensagem");
  

if (document.getElementById("nome").value.length > 50) {
  alert("Campo nome não pode ter mais de 50 caracteres");
  document.getElementById("nome").focus();
} 

if (document.getElementById("email").value.length > 50) {
  alert("Campo e-mail não pode ter mais de 50 caracteres");
  document.getElementById("email").focus();
} 

if (document.getElementById("assunto").value.length > 50) {
  alert("Campo assunto não pode ter mais de 50 caracteres");
  document.getElementById("assunto").focus();
}

if (document.getElementById("mensagem").value.length > 300) {
  alert("Campo e-mail não pode ter mais de 300 caracteres");
  document.getElementById("mensagem").focus();
}

/*
if (document.getElementById("nome").value == "") {
  alert("Campo nome não pode ser vazio");
  document.getElementById("nome").focus();
} 

if (document.getElementById("email").value == "") {
  alert("Campo e-mail não pode ser vazio");
  document.getElementById("email").focus();
} 

if (document.getElementById("assunto").value == "") {
  alert("Campo assunto não pode ser vazio");
  document.getElementById("assunto").focus();
} 

if (document.getElementById("mensagem").value == "") {
  alert("Campo mensagem não pode ser vazio");
  document.getElementById("mensagem").focus();
} 

*/
if (nome.value == "" && email.value == "" && assunto.value == "" && mensagem.value == "") {
  alert("Preencha todos os campos");
  document.getElementById("nome").focus();
} else {  
    alert("Email Enviado Com Sucesso!!!" + "\n");
    alert("Dados Enviados: " + "\n" + "Nome: " + nome.value + "\n" + "E-mail: " + email.value + "\n" + "Assunto: " + assunto.value + "\n" + "Mensagem: " + mensagem.value);
}



 
}