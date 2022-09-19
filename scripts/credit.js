function fun123() {
    var registration = document.getElementById('registration');
    registration.value = 567;
    registration.textContent = `Регистрация авто : ${registration.value}`;

    var rng = document.getElementById('r1');  // Цена авто
    var i1 = document.getElementById('i1');
    i1.innerHTML = rng.value;

    var rng2 = document.getElementById('r2');
    var i2 = document.getElementById('i2');
    i2.innerHTML = rng2.value;


    var rng3 = document.getElementById('r3'); // Количество месяцев
    var i3 = document.getElementById('i3');
    i3.innerHTML = rng3.value;



    var kasko = document.getElementById('kasko');
    if (rng.value < 1000000) {
        kasko.value = Math.round(rng.value * 0.075);
        kasko.textContent = `Каско : ${kasko.value}`;
    }
    else if (rng.value >= 1000001 && rng.value <= 2000000) {
        kasko.value = Math.round(rng.value * 0.07);
        kasko.textContent = `Каско : ${kasko.value}`;
    }
    else if (rng.value >= 2000001 && rng.value <= 3000000) {
        kasko.value = Math.round(rng.value * 0.065);
        kasko.textContent = `Каско : ${kasko.value}`;
    }

    var percent = document.getElementById('percent');
    let year = 1;
    let proc = 7.5;
    if (rng3.value == 12) {
        percent.value = '7.5%';
        percent.textContent = `Процентная ставка : ${percent.value}`;
    }
    else if (rng3.value == 24) {
        percent.value = '11%';
        percent.textContent = `Процентная ставка : ${percent.value}`;
        year = 2;
        proc = 11;
    }
    else if (rng3.value == 36) {
        percent.value = '12.5%';
        percent.textContent = `Процентная ставка : ${percent.value}`;
        year = 3;
        proc = 12.5;
    }
    else if (rng3.value >= 48) {
        percent.value = '14%';
        percent.textContent = `Процентная ставка : ${percent.value}`;
        year = 4;
        proc = 14;
    }

    var Overpayment = document.getElementById('Overpayment');
    Overpayment.value = Math.round(((Number(rng.value) / rng2.value) * proc * year)) / 100;
    Overpayment.textContent = `Переплата по кредиту: ${Overpayment.value}`;

    var Sum = document.getElementById('Sum'); // Общая сумма
    Sum.value = Math.round(Number(Overpayment.value) + Number(rng.value) + Number(kasko.value) + registration.value);
    Sum.textContent = `Сумма : ${Sum.value}`;

}