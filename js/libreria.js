function randomNumber(min, max) {
  //console.log(arguments);//
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function das(str) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function notificationError(msgError) {
  const alerta = document.createElement("div");
  alerta.className = "alert alert-danger";
  alerta.innerHTML = msgError;
  return alerta;
}
function removeFirstNotification() {
  const alertToRemove = document.querySelector(".alert");
  console.log(alertToRemove);
  if (alertToRemove) alertToRemove.remove();
}

function palindromoLib(str) {
  const parola = str.toLowerCase();
  const parolaLen = parola.length;
  let parolaGirata = parola.split("").reverse().join("");
  // for(let i = parolaLen - 1; i >= 0; i-- ){
  //     parolaGirata += parola.charAt(i);
  // }
  return parolaGirata === parola;
}
