function performOperation() {
    
    const num1 = document.getElementById("input1").value;
    const num2 = document.getElementById("input2").value;

    if (!isNaN(num1) && !sNaN(num2)) {
        const result = multiply(num1, num2);
        displayResult(result);

    } else {
        displayResult("Please enter a valid value")
    }



}
function multiply(n1, n2) {

    debugger;
    return a * b;

}

function displayResult(result) {

    document.getElementById("result").innerHTML = "Este es el resultado: " + result;

}

