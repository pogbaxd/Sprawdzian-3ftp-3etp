let a = Number(prompt('Wpisz pierwszą liczbę'));
let b = Number(prompt('wpisz drugą liczbę '));
let wynik = (prompt('Wybierz: A-dodać,B-odjąć,C-pomnożyć,D-podzielić'));

switch (wynik){ // https://brainly.pl/zadanie/8262278
    case 'A':
        document.write(`wynik dodawania: ${a+b}` );break;
    case 'B':
        document.write(`wynik odejmowania: ${a-b}` );break;
    case 'C':
        document.write(`wynik mnożenia: ${a*b}`);break;
    case 'D':
        document.write(`wynik dzielenia: ${a/b}`);break;
}