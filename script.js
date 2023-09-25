const cardName = document.getElementById("card_name");
const cardNumber = document.getElementById("card_num");
var personName = document.getElementById("name");
const num = document.querySelectorAll(".num span");
const logName = document.getElementById("log_name");
const logNumber = document.getElementById("log_num");
const cardCVC = document.getElementById("card_cvc");
const logCVC = document.getElementById("log_cvc");
var cvc = document.getElementById("cvc");

cardName.addEventListener("input", () => {
  if (cardName.value.length <= 22) {
    personName.innerText = cardName.value;
    logName.innerText = "";
  } else {
    logName.innerText = "Name too long";
  }
});

cardNumber.addEventListener("input", () => {
  let i = cardNumber.value.length;
  let f = cardNumber.value;
  for (const e of f) {
    logName.innerText = e;
    num[i - 1].innerText = e;
  }
  logNumber.innerText = `num_${i}`;
  if (i > 16) {
    logNumber.innerText = "Hey";
  } 
});

cardCVC.addEventListener("input", () => {
  if (cardCVC.value.length <= 3) {
    cvc.innerText = cardCVC.value;
    logCVC.innerText = "";
  } else {
    logCVC.innerText = "Name too long";
  }
});
