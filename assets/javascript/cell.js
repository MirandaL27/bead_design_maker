class Cell {
    id;
    color;
    constructor(id, color = ''){
        this.id = id;
        this.color = color;
    }
    setColor(color){
        //color must be a hex value representing the color of the cell
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