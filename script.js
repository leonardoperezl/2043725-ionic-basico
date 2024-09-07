var articleField = document.getElementById("articleName");
var amountField = document.getElementById("amount");
var articleList = document.getElementById("articleList")
var totalField = document.getElementById("totalField")
var total = 0;

// var parrafo = document.querySelector("p");

// function iniciarSesion() {
//   var username = campoUser.value;
//   parrafo.innerHTML = `Login correcto <strong>${username}</strong>`;
// }

// function registrarse() {
//   var username = campoUser.value;
//   parrafo.innerHTML = `Registro con éxito <strong>${username}</strong>`;
// }

function get_article() {
  var articleName = articleField.value;
  return articleName
}

function get_amount() {
  var amount = amountField.value;
  return amount
}

function calculate_total() {
  articleName = get_article();
  amount = get_amount();

  articleField.value = ""
  amountField.value = ""

  total += parseFloat(amount);

  var newArticle = document.createElement("ion-item");
  newArticle.innerHTML = `${articleName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>$${amount}</strong>`;

  articleList.appendChild(newArticle)
  
  totalField.innerHTML = `<strong>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${total}</strong>`;
}