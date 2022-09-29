class Grid{
    cells;
    rows;
    cols;
    selectedCells;
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.generateBlankGrid();
        this.selectedCells=[];
    }
    setRows(rows){
        this.rows = rows;
    }
    setColumns(cols){
        this.cols = cols;
    }
    generateBlankGrid(){
        for(let i=0;i<this.rows*this.cols;i++){
            this.cells.push(new Cell(i));
        }
    }
    loadExistingGrid(gridToLoad){
        //stub. need to add implementation later.
    }
    colorCell(id, color){
        let cell = this.cells.find(element => element.id === id);
        cell.color = color;
    }
    setSelectedCells(cells){
        //cells needs to be an array of cell ids.
        this.selectedCells = cells;
    }
    resetSelectedCells(){
        this.selectedCells = [];
    }
    clearSelectedCells(){
        for(let i=0;i<this.selectedCells.length;i++){
            let cell = this.cells.find(element => element.id === this.selectedCells[i]);
            cell.color = '';
        }
    }
    clearAllCellsWithColors(colors){
        //colors needs to be an array of hex color values
        for(let i=0;i<colors.length;i++){
            //do this for each color in the colors array.
            let cell = this.cells.find(element => element.color === colors[i]);
            while(cell){
                //keep finding cells with this color until no more are found.
                cell.color = '';
                cell = this.cells.find(element => element.color === colors[i]);
            }
        }
    }
    resetGrid(){
        this.cells = [];
        this.generateBlankGrid();
    }
}