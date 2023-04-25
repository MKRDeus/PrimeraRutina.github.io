/*slider de los nombres de los ejercicios */
const exerZero = document.querySelector("#exer-zero");
const exerOne = document.querySelector("#exer-one");
const exerTwo = document.querySelector("#exer-two");
const exerThree = document.querySelector("#exer-three");
/*Span de Sets */
const setsCount = document.querySelector("#set-count");
/*p de work y rest */
const workTime = document.querySelector("#work-time");
const restTime = document.querySelector("#rest-time");
/*Span de Work y Rest */
const numRest = document.querySelector("#rest");
const numWork = document.querySelector("#work");
/*Botoncito 7u7*/
const botoncito = document.querySelector("#botoncito");
/*Identificador de intervalos */
let idMainCount, idSetCount, idWorkCount, idRestCount, idRep, idExerCount;
/*variables para contar */
let i = 1, j = 1, total = 0, sets = 1, work = 1, rest = 1, exer = 1, limit = 1;

botoncito.addEventListener('click', function () {
    setsCount.innerHTML = sets;
    idWorkCount = setInterval(workCountFunction, 1000);
    idSetCount = setInterval(setCountFunction, 40000);
    idExerCount = setInterval(sliderExerFunction, 120000);
    idRep = setInterval(repFunction, 40000);
})

function repFunction() {
    clearInterval(idWorkCount);
    idWorkCount = setInterval(workCountFunction, 1000);
    limit++;
    if (limit > 12) {
        clearInterval(idRep);
        clearInterval(idWorkCount);
        clearInterval(idRestCount);
        clearInterval(idSetCount);
        clearInterval(idExerCount);
        clearInterval(idMainCount);
        alert("Congratulation You Finish This Training, You look Aaamazing¡, keep doing. You did " + total + " of Seconds");
    }
}

function workCountFunction() {
    console.log("wor-seg: " + i);
    numWork.innerHTML = work;
    work++; i++;
    if (work > 30) {
        work = 1;
        workTime.classList.remove("show-time");
        workTime.classList.add("hide-time");
        restTime.classList.remove("hide-time");
        restTime.classList.add("show-time");
        clearInterval(idWorkCount);
        idRestCount = setInterval(restCountFunction, 1000);
        function restCountFunction() {
            console.log(j);
            numRest.innerHTML = rest;
            rest++;j++;
            if (rest > 10) {
                rest = 1;
                restTime.classList.remove("show-time");
                restTime.classList.add("hide-time");
                workTime.classList.remove("hide-time");
                workTime.classList.add("show-time");
                clearInterval(idRestCount);
            }
        }
    }
    return 0;
}

// function restCountFunction() {
//     numRest.innerHTML = rest;
//     rest++;
//     if (rest > 11) {
//         rest = 0;
//         restTime.classList.remove("show-time");
//         restTime.classList.add("hide-time");
//         workTime.classList.remove("hide-time");
//         workTime.classList.add("show-time");
//         clearInterval(idRestCount);
//     }
// }

function setCountFunction() {
    sets++;
    setsCount.innerHTML = sets;
    if (sets > 2) {
        sets = 0;
    }
}
function sliderExerFunction() {
    exer++;
    if (exer > 1 && exer < 3) {
        exerZero.classList.add("hide-exer");
        exerZero.classList.remove("show-exer");
        exerOne.classList.add("show-exer");
        exerOne.classList.remove("hide-exer");
    }
    if (exer > 2 && exer < 4) {
        exerOne.classList.add("hide-exer");
        exerOne.classList.remove("show-exer");
        exerTwo.classList.add("show-exer");
        exerTwo.classList.remove("hide-exer");
    }
    if (exer > 3 && exer < 5) {
        exerTwo.classList.add("hide-exer");
        exerTwo.classList.remove("show-exer");
        exerThree.classList.add("show-exer");
        exerThree.classList.remove("hide-exer");
    }
}
