const computer = ["rock", "papper", "scissors"]
let previousCInput;

function cInputRandom() {
    // i = index, for computer array
    i = Math.floor(Math.random() * computer.length);
    if (computer[i] == previousCInput) {
        cInputRandom()
    }
    const cInput = computer[i];
    previousCInput = cInput
    return cInput;
}

function cAnimate(cInput) {

    const d = document.querySelectorAll('.computer-choice')
    // removing all class
    let i = 0
    while (i <= 2) {
        d[i].classList.remove('b-up')
        i++
    }

    const c = document.querySelector('#' + cInput + 'Computer')
    c.classList.add('b-up')

    return

}

function suit(playerInput) {

    // Check empty input
    if (playerInput.value == "") {
        alert("CHOOSE YOURS!")
        return
    }
    event.preventDefault();
    const b = document.querySelector('.btn-start')
    b.classList.add('b-click')
    setTimeout(() => {
        b.classList.remove('b-click')
    }, 200);
    cInput = cInputRandom();
    const pInput = playerInput.value;
    cAnimate(cInput);

    // Rock
    if (pInput == "rock" && cInput == "rock") {
        let result = "Draw"
        displayResult(result, pInput, cInput)
    } else if (pInput == "rock" && cInput == "papper") {
        let result = "You Lose"
        displayResult(result, pInput, cInput)
    } else if (pInput == "rock" && cInput == "scissors") {
        let result = "You Win"
        displayResult(result, pInput, cInput)
    }
    // End of Rock

    // Papper
    else if (pInput == "papper" && cInput == "papper") {
        let result = "Draw"
        displayResult(result, pInput, cInput)
    } else if (pInput == "papper" && cInput == "rock") {
        let result = "You Win"
        displayResult(result, pInput, cInput)
    } else if (pInput == "papper" && cInput == "scissors") {
        let result = "You Lose"
        displayResult(result, pInput, cInput)
    }
    // End of Papper

    // scissors
    else if (pInput == "scissors" && cInput == "scissors") {
        let result = "Draw";
        displayResult(result, pInput, cInput)
    } else if (pInput == "scissors" && cInput == "rock") {
        let result = "You Lose"
        displayResult(result, pInput, cInput)
    } else if (pInput == "scissors" && cInput == "papper") {
        let result = "You Win"
        displayResult(result, pInput, cInput)
    }
    // End of scissors
}

function displayResult(result, pInput, cInput) {
    const resultView = document.querySelector('#result')
    const pChoice = document.querySelector("#pChoice")
    const cChoice = document.querySelector("#cChoice")
    const textResult = document.querySelector('#text-result')

    pChoice.src = 'img/' + pInput + '.png'
    cChoice.src = 'img/' + cInput + '.png'
    textResult.innerHTML = result

    resultView.classList.remove('d-none')
    // resultView.innerHTML =
    //     `<h1>` + result + `</h1>`
}