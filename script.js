const formName = document.getElementById("form_name");
const form = document.getElementsByTagName("form")[0];
const complete = document.getElementsByClassName("alert")[0];

const formNumber = document.getElementById("form_num");
const formMonth = document.getElementById("form_month");
const formYear = document.getElementById("form_year");
const formCVC = document.getElementById("form_cvc");
const formBtn = document.getElementById("form_btn");

var cardName = document.getElementById("name");
const cardNumber = document.querySelectorAll(".num span");
const cardMonth = document.querySelectorAll(".month span");
const cardYear = document.querySelectorAll(".year span");
const cardCVC = document.querySelectorAll("#cvc span");

const logName = document.getElementById("log_name");
const logNumber = document.getElementById("log_num");
const logDate = document.getElementById("log_date");
const logCVC = document.getElementById("log_cvc");

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
  let i = formCVC.value.length;
  let f = formCVC.value;
  for (const e of f) {
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

const blankMessage = (form, log) => {
  form.style.borderColor = "red";
  log.innerText = "Can't be blank";
};

const restore = (form, log) => {
  form.style.borderColor = "var(--lightGrayishViolet)";
  log.innerText = "";
};

let a,
  b,
  c,
  d,
  e = 0;

function authenticate() {
  if (formName.value === "") {
    blankMessage(formName, logName);
    a = 0;
  } else if (!isNaN(formName.value)) {
    logName.innerText = "Wrong format, letters only";
    formName.style.borderColor = "red";
  } else {
    restore(formName, logName);
    a = 1;
  }
  if (formNumber.value === "") {
    blankMessage(formNumber, logNumber);
    b = 0;
  } else if (isNaN(formNumber.value)) {
    logNumber.innerText = "Wrong format, numbers only";
    formNumber.style.borderColor = "red";
  } else if (formNumber.value.length !== 16) {
    logNumber.innerText = "Must be 16 digits";
    formNumber.style.borderColor = "red";
  } else {
    restore(formNumber, logNumber);
    b = 1;
  }
  if (formMonth.value === "") {
    blankMessage(formMonth, logDate);
    c = 0;
  } else if (formMonth.value < 1 || formMonth.value > 12) {
    logDate.innerText = "Must be a valid date";
    formMonth.style.borderColor = "red";
  } else {
    restore(formMonth, logDate);
    c = 1;
  }
  if (formYear.value === "") {
    blankMessage(formYear, logDate);
    d = 0;
  } else if (formYear.value < 0 || formYear.value > 99) {
    logDate.innerText = "Must be a valid date";
    formYear.style.borderColor = "red";
  } else {
    restore(formYear, logDate);
    d = 1;
  }
  if (formCVC.value === "") {
    blankMessage(formCVC, logCVC);
    e = 0;
  } else if (formCVC.value.length !== 3) {
    logCVC.innerText = "Invalid";
    formCVC.style.borderColor = "red";
  } else {
    restore(formCVC, logCVC);
    e = 1;
  }
  if (a && b && c && d && e) {
    form.style.display = "none";
    complete.style.display = "flex";
  }
}

const reset = () => {
  window.location = window.location.href;
};
