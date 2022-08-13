
let result = document.querySelector("#result");
let alert2 = document.querySelector(".alert2");
let alert1 = document.querySelector(".alert1");
let input = document.querySelector("#input");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let refresh = document.querySelector(".refresh");
let answer = document.querySelector(".answer");

let mytimer;
let age;

btn1.addEventListener("click", function () {
    age = input.value.trim();

    clearInterval(mytimer);

    if (age == "") {
        alert1.classList.add('active');

        mytimer = setInterval(function () {
            alert1.classList.remove('active')
        }, 3000);

    } else if (isNaN(age) == true) {
        alert2.classList.add('active')

        mytimer.setInterval(function () {
            alert2.classList.remove('active')
        }, 3000);
    } else {
        answer.classList.add('active')

        let remaining_years = 90 - age;
        let remaining_weeks = remaining_years * 52;

        result.innerHTML = seperatenumbersincomma(remaining_weeks);
        input.value = "";

    }
})

function seperatenumbersincomma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

btn2.addEventListener("click", function () {
    refresh.click();
})

