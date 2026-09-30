let one = Number(localStorage.getItem("countOne"));
let two = Number(localStorage.getItem("countTwo"));
let three = Number(localStorage.getItem("countThree"));
let four = Number(localStorage.getItem("countFour"));


let totalOne = Number(localStorage.getItem("amountFirst"));
let totalTwo = Number(localStorage.getItem("amountSecond"));
let totalThree = Number(localStorage.getItem("amountThird"));
let totalFour = Number(localStorage.getItem("amountFourth"));


let body = document.querySelector("body");

let sum = one + two + three + four;

console.log("one =", one);
console.log("two =", two);
console.log("three =", three);
console.log("four =", four);
console.log("sum =", sum);
console.log("is NaN =", Number.isNaN(sum));




if (sum <= 0)
{

    body.style.cssText = `
        background-color: black;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        margin-top: 10vh;
    `;

    let display = document.createElement("div");
    display.style.cssText = `
        width: 90vw;
        height: 25vh;
        border: 2px solid gold;
        border-radius: 15px;
        transition: 0.4s ease;
        padding-left: 20px;
        box-shadow: 2px 5px 8px gold;
    `;

    display.addEventListener("mouseover", () => {
        display.style.cssText = `
            width: 90vw;
            height: 25vh;
            border: 2px solid gold;
            border-radius: 15px;
            transition: 0.4s ease;
            transform: scale(1.1);
            padding-left: 20px;
            box-shadow: 5px 8px 10px gold;
        `;
    });

    display.addEventListener("mouseout", () => {
        display.style.transform = "scale(1)";
    });

    body.append(display);

    let para = document.createElement("p");
    para.innerText = "The cart is empty!";
    para.style.color = "white";
    para.style.fontSize = "25px";
    para.style.fontFamily = "Arial";

    display.append(para);
    
}
else
{
    body.style.cssText = `
        background-color: black;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        margin-top: 10vh;
        width: 100vw;
        height: 110vh;
    `;

    if (one > 0)
    {
        let firstDisplay = document.createElement("div");
        let firstPhoto = document.createElement("div");
        let firstinfo = document.createElement("div");
        let firstTitle = document.createElement("p");
        let firstCount = document.createElement("p");;
        let firstTotal = document.createElement("p");

        body.append(firstDisplay);
        firstDisplay.append(firstPhoto);
        firstDisplay.append(firstinfo);
        firstinfo.append(firstTitle);
        firstinfo.append(firstCount);
        firstinfo.append(firstTotal);

        firstDisplay.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 90%;
            height: 20%;
            background-color: transparent;
            border: 2px solid gold;
            border-radius: 15PX;
        `;

        firstPhoto.style.cssText = `
            background-image: url("burger1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 25%;
            height: 100%;
        `;

        firstinfo.style.cssText = `
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            align-items: flex-start;
            justify-content: space-evenly;
            background-color: transparent;
            width: 70%;
            height: 90%;
        `;

        firstTitle.innerText  = `Normal Burger`;

        firstTitle.style.cssText = `
            font-size: 21px;
            color: white;
            margin-left: 20px;
        `;
        
        firstCount.innerText = `Total units = ${one}x`;

        firstCount.style.cssText = `
            font-size: 15px;
            color: white;
            margin-left: 20px;
        `;

        firstTotal.innerText = `Total Amount to pay = $ ${totalOne}`;

        firstTotal.style.cssText = `
            font-size: 17px;
            color: gold;
            margin-left: 20px;
        `;

    }

    if (two > 0)
    {
        let secondDisplay = document.createElement("div");
        let secondPhoto = document.createElement("div");
        let secondinfo = document.createElement("div");
        let secondTitle = document.createElement("p");
        let secondCount = document.createElement("p");
        let secondTotal = document.createElement("p");

        body.append(secondDisplay);

        secondDisplay.append(secondPhoto);
        secondDisplay.append(secondinfo);

        secondinfo.append(secondTitle);
        secondinfo.append(secondCount);
        secondinfo.append(secondTotal);

        secondDisplay.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 90%;
            height: 20%;
            background-color: transparent;
            border: 2px solid gold;
            border-radius: 15px;
        `;

        secondPhoto.style.cssText = `
            background-image: url("burger2.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 25%;
            height: 100%;
        `;

        secondinfo.style.cssText = `
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            align-items: flex-start;
            justify-content: space-evenly;
            background-color: transparent;
            width: 70%;
            height: 90%;
        `;

        secondTitle.innerText = `Double Chicken`;

        secondTitle.style.cssText = `
            font-size: 21px;
            color: white;
            margin-left: 20px;
        `;

        secondCount.innerText = `Total units = ${two}x`;

        secondCount.style.cssText = `
            font-size: 15px;
            color: white;
            margin-left: 20px;
        `;

        secondTotal.innerText = `Total Amount to pay = $ ${totalTwo}`;

        secondTotal.style.cssText = `
            font-size: 17px;
            color: gold;
            margin-left: 20px;
        `;
    }

    if (three > 0)
    {
        let thirdDisplay = document.createElement("div");
        let thirdPhoto = document.createElement("div");
        let thirdinfo = document.createElement("div");
        let thirdTitle = document.createElement("p");
        let thirdCount = document.createElement("p");
        let thirdTotal = document.createElement("p");

        body.append(thirdDisplay);

        thirdDisplay.append(thirdPhoto);
        thirdDisplay.append(thirdinfo);

        thirdinfo.append(thirdTitle);
        thirdinfo.append(thirdCount);
        thirdinfo.append(thirdTotal);

        thirdDisplay.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 90%;
            height: 20%;
            background-color: transparent;
            border: 2px solid gold;
            border-radius: 15px;
        `;

        thirdPhoto.style.cssText = `
            background-image: url("veg.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 25%;
            height: 100%;
        `;

        thirdinfo.style.cssText = `
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            align-items: flex-start;
            justify-content: space-evenly;
            background-color: transparent;
            width: 70%;
            height: 90%;
        `;

        thirdTitle.innerText = `Jumbo Veg`;

        thirdTitle.style.cssText = `
            font-size: 21px;
            color: white;
            margin-left: 20px;
        `;

        thirdCount.innerText = `Total units = ${three}x`;

        thirdCount.style.cssText = `
            font-size: 15px;
            color: white;
            margin-left: 20px;
        `;

        thirdTotal.innerText = `Total Amount to pay = $ ${totalThree}`;

        thirdTotal.style.cssText = `
            font-size: 17px;
            color: gold;
            margin-left: 20px;
        `;
    }

    if (four > 0)
    {
        let fourthDisplay = document.createElement("div");
        let fourthPhoto = document.createElement("div");
        let fourthinfo = document.createElement("div");
        let fourthTitle = document.createElement("p");
        let fourthCount = document.createElement("p");
        let fourthTotal = document.createElement("p");

        body.append(fourthDisplay);

        fourthDisplay.append(fourthPhoto);
        fourthDisplay.append(fourthinfo);

        fourthinfo.append(fourthTitle);
        fourthinfo.append(fourthCount);
        fourthinfo.append(fourthTotal);

        fourthDisplay.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 90%;
            height: 20%;
            background-color: transparent;
            border: 2px solid gold;
            border-radius: 15px;
        `;

        fourthPhoto.style.cssText = `
            background-image: url("burger3.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 25%;
            height: 100%;
        `;

        fourthinfo.style.cssText = `
            display: flex;
            flex-direction: column;
            padding-left: 10px;
            align-items: flex-start;
            justify-content: space-evenly;
            background-color: transparent;
            width: 70%;
            height: 90%;
        `;

        fourthTitle.innerText = `Advanced Burger`;

        fourthTitle.style.cssText = `
            font-size: 21px;
            color: white;
            margin-left: 20px;
        `;

        fourthCount.innerText = `Total units = ${four}x`;

        fourthCount.style.cssText = `
            font-size: 15px;
            color: white;
            margin-left: 20px;
        `;

        fourthTotal.innerText = `Total Amount to pay = $ ${totalFour}`;

        fourthTotal.style.cssText = `
            font-size: 17px;
            color: gold;
            margin-left: 20px;
        `;
    }
    
}