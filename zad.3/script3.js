let firstNumber = Number(prompt('Wpisz pierwszą liczbe'));// zapytanie o pierwsza liczbę

function between(min, max) { // funkacja losująca drugą liczbę z podanego przedziału
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

let secondNumber = Number(between(0,50)); // wylosowanie drugiej liczby  z przedziału od 0 do 50

document.write("iloczyn to: " + secondNumber*firstNumber);// wypisanie na dokument wyniku