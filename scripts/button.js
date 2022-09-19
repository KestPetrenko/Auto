let inputName = document.querySelector("#name");
inputName.addEventListener("click", funcName);
function funcName() {
    inputName.value = "";
}

let inputPhone = document.querySelector("#phone");
inputPhone.addEventListener("click", funcPhone);
function funcPhone() {
    inputPhone.value = "";
}

let inputNameBottom = document.querySelector("#name1");
inputNameBottom.addEventListener("click", funcNameButton);
function funcNameButton() {
    inputNameBottom.value = "";
}

let inputPhoneBottom = document.querySelector("#phone1");
inputPhoneBottom.addEventListener("click", funcPhoneButton);
function funcPhoneButton() {
    inputPhoneBottom.value = "";
}

let inputAsk = document.querySelector("#ask1");
inputAsk.addEventListener("click", funcAsk);
function funcAsk() {
    inputAsk.value = "";
}

let button = document.querySelectorAll(".otpravite");


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if (inputName.value !== '' && inputPhone.value !== '') {
            inputPhone.style.background = "#312C70";
            inputName.style.background = "#312C70";
        }
        else {
            inputName.style.background = "red";
            inputPhone.style.background = "red";
            inputName.value = "Заполните все поля"
            inputPhone.value = "Заполните все поля"
        }
    })
}

let buttonAsk = document.querySelectorAll("#askButton");   
for (let i = 0; i < button.length; i++) {
    buttonAsk[i].addEventListener('click', function () {
        if (inputNameBottom.value !== '' && inputPhoneBottom.value !== '' && inputAsk.value !== ''  ) {
            inputPhoneBottom.style.background = "#312C70";
            inputNameBottom.style.background = "#312C70";
            inputAsk.style.background = "#312C70";
        }
        else {
            inputNameBottom.style.background = "red";
            inputPhoneBottom.style.background = "red";
            inputNameBottom.value = "Заполните все поля"
            inputPhoneBottom.value = "Заполните все поля"
            inputAsk.style.background = "red";
            inputAsk.value = "Заполните все поля"
        }
    })
}

