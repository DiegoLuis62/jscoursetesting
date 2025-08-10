function performOperation() {
    
    const num1 = parseInt(document.getElementById("input1").value);
    const num2 = parseInt(document.getElementById("input2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = multiply(num1, num2);
        displayResult(result);

    } else {
        displayResult("Please enter a valid value")
    }



}
function multiply(n1, n2) {

    debugger;
    return n1 * n2;

}

function displayResult(result) {

    document.getElementById("result").innerHTML = "Este es el resultado: " + result;

}

