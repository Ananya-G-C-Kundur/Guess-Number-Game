let randomNumber = Math.floor(Math.random() * 10) + 1;

// floor --> decimal to whole number convert
// Math.random() ---> generate a number between 0 and 1
// * 10 ----> shifts the points
// + 1 ----> 1 to 10

let count = 0;  // counts the user attempts

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);

    count++;

    if (userGuess == randomNumber)
    {
        document.getElementById("message").innerText = "🎉 Correct Guess!";
    }
    else if (userGuess > randomNumber)
    {
        document.getElementById("message").innerText = "⬆ Too High!";
    }
    else
    {
        document.getElementById("message").innerText = "⬇ Too Low!";
    }

    document.getElementById("attempts").innerText = "Attempts : " + count;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    count = 0;

    document.getElementById("message").innerText = "";
    document.getElementById("attempts").innerText = "";
    document.getElementById("guessInput").value= "";

}