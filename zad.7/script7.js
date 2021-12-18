

function grid(){ //
    let arr = [];

    for(let i=1; i<=10; i++){ // https://replit.com/@pogbaxd/10x10-grid-array#index.js
        let row = [];
        for(let j=1; j<=10; j++){
            row.push(j)
        }
        arr.push(row)
    }
    return arr;
}

let arr = grid();

let num = arr.reduce((count, row) => count + row.length, 0); // https://stackoverflow.com/questions/16468124/count-values-of-the-inner-two-dimensional-array-javascript/16468248

document.write(`ilość cegieł = ${num}`);