let logIn = document.querySelector(".log-in");
let mode = document.querySelector(".mode");
let root = document.documentElement;

let minusFirst = document.querySelector("#minus-first");
let plusFirst = document.querySelector("#plus-first");
let minusSecond = document.querySelector("#minus-second");
let plusSecond = document.querySelector("#plus-second");
let minusThird = document.querySelector("#minus-third");
let plusThird = document.querySelector("#plus-third");
let minusFourth = document.querySelector("#minus-fourth");
let plusFourth = document.querySelector("#plus-fourth");

let amountFirst = document.querySelector(".total-first");
let amountSecond = document.querySelector(".total-second");
let amountThird = document.querySelector(".total-third");
let amountFourth = document.querySelector(".total-fourth");

let countFirst = document.querySelector(".number-one");
let countSecond = document.querySelector(".number-two");
let countThird = document.querySelector(".number-three");
let countFourth = document.querySelector(".number-four");

let costFirst = document.querySelector(".cost-first");
let costSecond = document.querySelector(".cost-second");
let costThird = document.querySelector(".cost-third");
let costFourth = document.querySelector(".cost-fourth");


// For single click 
logIn.addEventListener("click", () => {
    window.location.href = "tempo.html";
});



//For modes 
let curr = "dark";

mode.addEventListener("click", () => {
    if (curr == "dark")
    {
        mode.style.backgroundColor = "black";
        mode.style.color = "white";
        root.style.setProperty("--bgcolor", "#D6D3D1");
        root.style.setProperty("--white", "rgb(0, 0, 0");
        curr = "light";
    }
    else
    {
        mode.style.backgroundColor = "#FFDF20";
        mode.style.color = "black";
        root.style.setProperty("--bgcolor", "black");
        root.style.setProperty("--white", "white");
        curr = "dark";
    }
});

// Now to the pricing section



let numOne = 0;
let countOne = 0;

minusFirst.addEventListener("click", () => {

    if (amountFirst != "0")
    {
        numOne -= Number(costFirst.innerText);

        amountFirst.innerText = numOne;

        countOne -= 1;

        countFirst.innerText = countOne;
    }

});

plusFirst.addEventListener("click", () => {

    numOne += Number(costFirst.innerText);

    amountFirst.innerText = numOne;

    countOne += 1;

    countFirst.innerText = countOne;

});


// SECOND

let numTwo = 0;
let countTwo = 0;

minusSecond.addEventListener("click", () => {

    if (amountSecond != "0")
    {
        numTwo -= Number(costSecond.innerText);

        amountSecond.innerText = numTwo;

        countTwo -= 1;

        countSecond.innerText = countTwo;
    }

});

plusSecond.addEventListener("click", () => {

    numTwo += Number(costSecond.innerText);

    amountSecond.innerText = numTwo;

    countTwo += 1;

    countSecond.innerText = countTwo;

});


// THIRD

let numThree = 0;
let countThree = 0;

minusThird.addEventListener("click", () => {

    if (amountThird != "0")
    {
        numThree -= Number(costThird.innerText);

        amountThird.innerText = numThree;

        countThree -= 1;

        countThird.innerText = countThree;
    }

});

plusThird.addEventListener("click", () => {

    numThree += Number(costThird.innerText);

    amountThird.innerText = numThree;

    countThree += 1;

    countThird.innerText = countThree;

});


// FOURTH

let numFour = 0;
let countFour = 0;

minusFourth.addEventListener("click", () => {

    if (amountFourth != "0")
    {
        numFour -= Number(costFourth.innerText);

        amountFourth.innerText = numFour;

        countFour -= 1;

        countFourth.innerText = countFour;
    }

});

plusFourth.addEventListener("click", () => {

    numFour += Number(costFourth.innerText);

    amountFourth.innerText = numFour;

    countFour += 1;

    countFourth.innerText = countFour;

});