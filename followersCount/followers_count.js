let count = 0
function increaseCount() {
    count++;
    displayCount()
    checkCountValue()
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
        alert("your intagram post gained 10 followers! congratulation!")
    } else if (count === 20) {
        alert("Your instagram post gained 20 follower ! keep it up!")

    }
}

function reset() {
    count = 0;
    document.getElementById("countDisplay").innerHTML = count;
    alert("the Followers count has been reset.")
}