let liczba = Number(prompt('Wpisz liczbę :'));// zapytanie o liczbe

switch (true) {
    case (liczba < 0):// gdy liczba jest mniejsza niż zero
        document.write('liczba jest ujemna');
        break;
    case (liczba > 0): // gdy liczba jest większa niż zero
        document.write('liczba jest dodatnia');
        break;
    case (liczba === 0): // gdy liczba jest równa zero
        document.write('liczba jest równa zero');
}