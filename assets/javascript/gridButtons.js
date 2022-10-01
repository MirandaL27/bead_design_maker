let bodyEl = document.querySelector(".body");

function handleGridEvents(event){
    if(event.target.id.includes("cell_")){
        //the click is coming from the grid
        if(state.color.selectedColor !== ""){
            //color the cell with the selected color.
            state.grid.colorCell(event.target.id.replace("cell_", ""),state.color.selectedColor);
            displayGrid(state.grid);
        }
    }
}

bodyEl.addEventListener("click", handleGridEvents);