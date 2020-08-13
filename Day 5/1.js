function handleMouseOver() {

    console.log("I have successfully called.");
    var classElement = document.querySelector(".beautify");
    classElement.style.background = "yellow";
    classElement.style.color = "black";

    classElement.innerHTML = "Hello Class Selector";

}

function handleMouseOut() {

    console.log("I have successfully called.");
    var classElement = document.querySelector(".beautify");
    classElement.style.background = "black";
    classElement.style.color = "white";

    classElement.innerHTML = "Hello World";

}

