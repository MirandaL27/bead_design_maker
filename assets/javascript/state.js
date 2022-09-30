//this file contains the state object that controls and contains the state of everything on the screen.

let state = {
    grid: '',
    color: '',
    initializeVariables(rows, cols){
        this.grid = new Grid(rows, cols);
        this.color = new Color();
    }

}