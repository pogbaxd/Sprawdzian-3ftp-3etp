let firstNumber = Number(prompt('wpisz pierwszą liczbę: '));// zapytania o liczby
let secondNumber = Number(prompt('wpisz drugą liczbę: '));
let thirdNumber = Number(prompt('wpisz trzecisz liczbę: '));

let result = Math.max(firstNumber, secondNumber, thirdNumber);// znalezienie największej liczby

document.write(`Największa liczba to : ${result}`);