function generateRandomColor() { // https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

let divItems = document.getElementsByClassName("container");

function selected(item) { // https://stackoverflow.com/questions/31896819/setting-background-color-of-div-on-click/31897055
    this.clear();
    item.style.backgroundColor = generateRandomColor();
}

function clear() { // https://stackoverflow.com/questions/31896819/setting-background-color-of-div-on-click/31897055
    for(let i=0; i < divItems.length; i++) {
        let item = divItems[i];
        item.style.backgroundColor = 'white';
    }
}

function doubleSize(x) { //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover
    x.style.fontSize = '200%';
}

function normalSize(x) { //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover
    x.style.fontSize = '16px';
}