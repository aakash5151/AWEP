
var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
    // create new element
    let newElement = document.createElement("div");
    newElement.textContent = "User Comment ..." + commentCounter;

    newElement.style.background = "royalblue";
    newElement.style.color = "white";
    newElement.style.margin = "4px";


    const commentBox = document.querySelector("#commentBox");


    commentBox.appendChild(newElement);


    commentCounter++;
}

function likeHere() {
    likeCounter++;

    let btnElement = document.querySelector("#likeid").innerHTML = "Like " + likeCounter;
    //btnElement.innerHTML = "Like " + likeCounter;
}