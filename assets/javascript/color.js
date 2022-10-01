class Color{
    colorList;
    selectedColor;
    constructor(){
        this.colorList=[];
        this.selectedColor = '';
    }
    addColorToList(color){
        if(!this.colorList.includes(color)){
            this.colorList.push(color);
        }
    }
    deleteColorFromList(color){
        let index = this.colorList.findIndex(elem => elem === color);
        this.colorList.splice(index, 1);
    }
    deleteColorFromListWithIndex(index){
        this.colorList.splice(index,1);
    }
    clearColorList(){
        this.colorList = [];
    }
    selectColor(color){
        if(this.colorList.includes(color)){
            this.selectedColor = color;
        }
    }
    getSelectedColorindex(){
        return this.colorList.findIndex(elem => elem === this.selectedColor);
    }
    selectColorWithIndex(index){
        this.selectedColor = this.colorList[index];
    }
    deselectColor(){
        this.selectedColor = '';
    }
    getColorListFromGrid(grid){
        for(let i=0;i<grid.cells.length;i++){
            if(!this.colorList.includes(grid.cells[i].color)){
                this.addColorToList(grid.cells[i].color);
            }
        }
    }
}