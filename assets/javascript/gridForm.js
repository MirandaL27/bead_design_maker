// this file contains the function that handles the generate grid button click

let rowFormEl = document.querySelector(".rows");
let colFormEl = document.querySelector(".cols");

function handleGenerateGrid(event){
    event.preventDefault();
    let rows = rowFormEl.value;
    let cols = colFormEl.value;
    state.initializeGrid(rows, cols);
    displayGrid(state.grid);
}