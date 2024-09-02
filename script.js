var campoUser = document.getElementById("campoUser");
var campoPassword = document.getElementById("campoPassword");

var parrafo = document.querySelector("p");

function iniciarSesion() {
  var username = campoUser.value;
  parrafo.innerHTML = `Login correcto <strong>${username}</strong>`;
}

function registrarse() {
  var username = campoUser.value;
  parrafo.innerHTML = `Registro con éxito <strong>${username}</strong>`;
}
