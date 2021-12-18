let a1 = 5;
let r = 10;
function a100()
{
   return Number(a1 + (100-1)* r);
}

let suma = Number((a1 + a100())/2 * 100);

document.write(`suma wynosi: ${suma}`);


