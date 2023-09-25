const formName = document.getElementById("form_name");
const formNumber = document.getElementById("form_num");
const formMonth = document.getElementById("form_month");
const formYear = document.getElementById("form_year");
const formCVC = document.getElementById("form_cvc");
var cardName = document.getElementById("name");
const cardNumber = document.querySelectorAll(".num span");
const cardMonth = document.querySelectorAll(".month span");
const cardYear = document.querySelectorAll(".year span");
const cardCVC = document.querySelectorAll("#cvc span");

const logName = document.getElementById("log_name");
const logNumber = document.getElementById("log_num");
const logDate = document.getElementById("log_date");
const logCVC = document.getElementById("log_cvc");
var cvc = document.getElementById("cvc");

formName.addEventListener("input", () => {
  if (formName.value.length <= 22) {
    cardName.innerText = formName.value;
    logName.innerText = "";
  } else {
    logName.innerText = "Name too long";
  }
});

const updateNumber = (event) => {
  let i = formNumber.value.length;
  let f = formNumber.value;
  for (const e of f) {
    cardNumber[i - 1].innerText = e;
  }
  if (event.key === "Backspace") {
    cardNumber[i].innerText = 0;
  }
};

formNumber.addEventListener("input", updateNumber);
formNumber.addEventListener("keyup", updateNumber);
formNumber.addEventListener("keypress", updateNumber);
formNumber.addEventListener("keydown", updateNumber);

const updateMonth = (event) => {
  let i = formMonth.value.length;
  let f = formMonth.value;
  for (const e of f) {
    cardMonth[i - 1].innerText = e;
  }
  if (event.key === "Backspace") {
    cardMonth[i].innerText = 0;
  }
};

formMonth.addEventListener("input", updateMonth);
formMonth.addEventListener("keyup", updateMonth);
formMonth.addEventListener("keypress", updateMonth);
formMonth.addEventListener("keydown", updateMonth);

const updateYear = (event) => {
  let i = formYear.value.length;
  let f = formYear.value;
  for (const e of f) {
    cardYear[i - 1].innerText = e;
  }
  if (event.key === "Backspace") {
    cardYear[i].innerText = 0;
  }
};

formYear.addEventListener("input", updateYear);
formYear.addEventListener("keyup", updateYear);
formYear.addEventListener("keypress", updateYear);
formYear.addEventListener("keydown", updateYear);

const updateCVC = (event) => {
  let f = formCVC.value;
  for (const e of f) {
    logName.innerText = e;
    cardCVC[i - 1].innerText = e;
  }
  if (event.key === "Backspace") {
    cardCVC[i].innerText = 0;
  }
};

formCVC.addEventListener("input", updateCVC);
formCVC.addEventListener("keyup", updateCVC);
formCVC.addEventListener("keypress", updateCVC);
formCVC.addEventListener("keydown", updateCVC);
