//this file contains functions for grid display

let gridContainerEl = document.querySelector(".gridcontainer");

function displayGrid(grid){
    gridContainerEl.style.setProperty('--grid-rows', grid.rows);
    gridContainerEl.style.setProperty('--grid-cols', grid.cols);
    let width = (grid.cols);
    let height = (grid.rows)*15;
    gridContainerEl.style.width = `${width}%`;
    gridContainerEl.style.height = `${height}px`;
    //get rid of old grid first
    deleteOldGrid();
    for(let i=0;i<grid.cells.length;i++){
        //generate new grid html element for each cell in the grid object
        let newDiv = document.createElement("div");
        newDiv.id = `cell_${i}`;
        newDiv.className = `grid_item`;
        newDiv.style.backgroundColor = grid.cells[i].getColor();
        //let paddingHoriz = (1/grid.rows)*200;
        //let paddingVert = (1/grid.cols)*200;
        newDiv.style.padding = `auto`;
        gridContainerEl.appendChild(newDiv);
    }
}

function deleteOldGrid(){
    while (gridContainerEl.firstChild) {
        gridContainerEl.removeChild(gridContainerEl.lastChild);
    }
}
