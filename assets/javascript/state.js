//this file contains the state object that controls and contains the state of everything on the screen.

let state = {
    grid: '',
    color: '',
    initializeColor(){
        this.color = new Color();
    },
    initializeGrid(rows, cols){
        this.grid = new Grid(rows, cols);
    }

}

state.initializeColor();