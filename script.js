let logIn = document.querySelector(".log-in");
let mode = document.querySelector(".mode");
let root = document.documentElement;









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


