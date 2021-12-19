let n = Number(prompt('wpisz długość ciągu'));
let x = Number(prompt('wpisz liczbę początkową'));
let y = Number(prompt('wpisz różnice między liczbami'));

document.write("ciąg arytmetyczny : ");
document.write(`${x} \n`);
for (let i=0; i<n-1; i++) {

    x += y;
    document.write(`${x} \n`);
}
