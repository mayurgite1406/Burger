let cart = document.querySelector(".cart");
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

let countFirst = document.querySelector(".number-one");
let countSecond = document.querySelector(".number-two");
let countThird = document.querySelector(".number-three");
let countFourth = document.querySelector(".number-four");

let costFirst = document.querySelector(".cost-first");
let costSecond = document.querySelector(".cost-second");
let costThird = document.querySelector(".cost-third");
let costFourth = document.querySelector(".cost-fourth");

let amountFirst = 0;
let amountSecond = 0;
let amountThird = 0;
let amountFourth = 0;



//For modes 
let curr = "dark";

mode.addEventListener("click", () => {
    if (curr == "dark")
    {
        mode.style.backgroundColor = "black";
        mode.style.color = "white";
        root.style.setProperty("--bgcolor", "#D6D3D1");
        root.style.setProperty("--white", "rgb(0, 0, 0)");
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

// Cart section now

cart.addEventListener("click", () => {
    window.location.href = "cart.html";
});


// Now to the pricing section



let numOne = 0;
let countOne = 0;

minusFirst.addEventListener("click", () => {

    if (countOne > 0)
    {
        numOne -= Number(costFirst.innerText);
        amountFirst = numOne;
        countOne = countOne - 1;
        countFirst.innerText = countOne;
        localStorage.setItem("countOne", countOne);
    }

    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});

plusFirst.addEventListener("click", () => {

    numOne += Number(costFirst.innerText);
    amountFirst = numOne;
    countOne += 1;
    countFirst.innerText = countOne;
    localStorage.setItem("countOne", countOne);

    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});


// SECOND

let numTwo = 0;
let countTwo = 0;

minusSecond.addEventListener("click", () => {

    if (countTwo > 0)
    {
        numTwo -= Number(costSecond.innerText);
        amountSecond = numTwo;
        countTwo -= 1;
        countSecond.innerText = countTwo;
        localStorage.setItem("countTwo", countTwo);
    }

    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});

plusSecond.addEventListener("click", () => {

    numTwo += Number(costSecond.innerText);
    amountSecond = numTwo;
    countTwo += 1;
    countSecond.innerText = countTwo;
    localStorage.setItem("countTwo", countTwo);

    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});


// THIRD

let numThree = 0;
let countThree = 0;

minusThird.addEventListener("click", () => {

    if (countThree > 0)
    {
        numThree -= Number(costThird.innerText);
        amountThird = numThree;
        countThree -= 1;
        countThird.innerText = countThree;
        localStorage.setItem("countThree", countThree);
    }

    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});

plusThird.addEventListener("click", () => {

    numThree += Number(costThird.innerText);
    amountThird = numThree;
    countThree += 1;
    countThird.innerText = countThree;
    localStorage.setItem("countThree", countThree);

    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});


// FOURTH

let numFour = 0;
let countFour = 0;

minusFourth.addEventListener("click", () => {

    if (countFour > 0)
    {
        numFour -= Number(costFourth.innerText);
        amountFourth = numFour;
        countFour -= 1;
        countFourth.innerText = countFour;
        localStorage.setItem("countFour", countFour);
    }

    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});

plusFourth.addEventListener("click", () => {

    numFour += Number(costFourth.innerText);
    amountFourth = numFour;
    countFour += 1;
    countFourth.innerText = countFour;
    localStorage.setItem("countFour", countFour);
    
    cart.style.transition = "0.3s ease";
    if (countOne > 0 || countTwo > 0 || countThree > 0 || countFour > 0)
    {
        cart.style.backgroundColor = "#9AE630";
        cart.style.transform = "scale(1.1)";
    }
    else
    {
        cart.style.backgroundColor = "#FFDF20";
        cart.style.transform = "scale(1)";
    }

});


