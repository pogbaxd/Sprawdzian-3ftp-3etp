let cena = Number(prompt('Wpisz cene paliwa[zł za litr]'));// zapytanie o cene
let lenght = Number(prompt('Wpisz długość trasy[km]'));// zapytanie o długość trasy
let spalanie = Number(prompt('Wpisz wartość spalania samochodu[l/100km]'));//zapytanie o wartość spalnia

let result = spalanie/100*cena*lenght;// obliczanie kosztu paliwa

document.write('cena paliwa wynosi: ' + result);