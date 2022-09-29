class Color{
    colorList;
    selectedColor;
    constructor(){
        this.colorList=[];
        this.selectedColor = '';
    }
    addColorToList(color){
        this.colorList.push(color);
    }
    deleteColorFromList(color){
        let index = this.colorList.findIndex(elem => elem === color);
        this.colorList.splice(index, 1);
    }
    clearColorList(){
        this.colorList = [];
    }
    selectColor(color){
        if(this.colorList.includes(color)){
            this.selectColor = color;
        }
    }
    deselectColor(){
        this.selectedColor = '';
    }
}