var z = 0;

function compute_1() {

    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);

    z = x + y;

}


function compute_2() {

    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);

    z = x - y;

}


function compute_3() {

    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);

    z = x / y;

}


function compute_4() {

    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);

    z = x * y;

}

function compute() {
    document.getElementById("ans").value = z;

}

