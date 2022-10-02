class Grid{
    cells;
    rows;
    cols;
    selectedCells;
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.cells = [];
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
            this.cells.push(new Cell());
        }
    }
    loadExistingGrid(gridToLoad){
        //stub. need to add implementation later.
    }
    colorCell(id, color){
        this.cells[id].color = color;
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
            this.cells[this.selectedCells[i]].color = '';
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
    fillAllUnfilledCells(color){
        for(let i=0;i<this.cells.length;i++){
            if(this.cells[i].color === ''){
                this.cells[i].color = color;
            }
        }
    }
    resetGrid(){
        this.deleteGrid();
        this.generateBlankGrid();
    }
    deleteGrid(){
        this.cells = [];
    }
    addCellsToTopOfGrid(numberOfRowsToAdd){
        this.rows += numberOfRowsToAdd;
        for(let i=0;i<numberOfRowsToAdd*cols;i++){
            this.cells.unshift(new Cell());
        }
    }
    addCellsBottomOfGrid(numberOfRowsToAdd){
        this.rows += numberOfRowsToAdd;
        for(let i=0;i<numberOfRowsToAdd*cols;i++){
            this.cells.push(new Cell());
        }
    }
    addCellsToLeftSideOfGrid(numberOfColumnsToAdd){
        let ending = (this.cols+numberOfColumnsToAdd-1) * this.rows;
        let added = 0;
        for(let i = 0; i <= ending; i += this.cols){
            this.cells.splice(i+added,0,new Cell());
            added++;
        }
        this.cols += numberOfColumnsToAdd;
    }
    addCellsToRightSideOfGrid(numberOfColumnsToAdd){
        //given 12 x 12 grid - add new cells at index 12, 24+1, 36+2, 48+3 etc.
        let ending = (this.cols+numberOfColumnsToAdd) * this.rows;
        let added = 0;
        for(let i = this.cols; i <= ending; i += this.cols){
            this.cells.splice(i+added,0,new Cell());
            added++;
        }
        this.cols += numberOfColumnsToAdd;
    }
}