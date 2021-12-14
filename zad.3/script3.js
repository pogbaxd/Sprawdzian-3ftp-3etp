let firstNumber = Number(prompt('Wpisz pierwszą liczbe'));

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

let secondNumber = Number(between(0,50));

document.write("iloczyn to: " + secondNumber*firstNumber);