class Cell {
    color;
    isSelected;
    constructor(color = ''){
        this.color = color;
        this.isSelected = false;
    }
    selectCell(){
        this.isSelected = true;
    }
    desselectCell(){
        this.isSelected = false;
    }
    setColor(color){
        //color must be a string (hex value) representing the color of the cell ex: "ffffff"
        this.color = color;
    }
    clearColor(){
        this.color = '';
    }
    getColor(){
        if(color === ''){
            return '';
        }
        return `#${this.color}`;
    }
}