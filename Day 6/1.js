var likecounter = 1;
function commenthere() {

    var commentEle = document.querySelector("#id1").value;
    var newEle = document.createElement("div");
    newEle.textContent = commentEle;

    newEle.style.background = "royalblue";
    newEle.style.color = "white";
    newEle.style.margin = "4px";
    var commentbox = document.querySelector("#commentbox");

    commentbox.appendChild(newEle);

    document.querySelector("#id1").value = "";

}

function likehere() {
    likecounter++;
    document.querySelector("#btn1").innerHTML = "like " + likecounter;

}