
function handleAddColor(){
    let selectedColorIndex = state.color.getSelectedColorindex();
    let color = document.querySelector(".selectedColor").value;
    state.color.addColorToList((color).toString().replace("#",""));
    displayColorList(state.color.colorList);
    if(selectedColorIndex >= 0){
        //a color is selected, check the corresponding box
        let checkEl = document.querySelector(`.select_color_${selectedColorIndex}`);
            checkEl.checked = true;
    }
    document.getElementById('id01').style.display='none';
}

function handleDeleteColor(event){
    let id = event.target.id;
    let index = parseInt(id.replace("delete_color_", ""));
    state.color.deleteColorFromListWithIndex(index);
    displayColorList(state.color.colorList);
}

function handleClearColors(){
    state.color.clearColorList();
    displayColorList(state.color.colorList);
    state.color.deselectColor();
}

function handleColorSelect(event){
    let index = event.target.className.replace("select_color_","");
    state.color.selectColorWithIndex(index);
    //deselect the other colors - uncheck them
    for(let i=0;i<state.color.colorList.length;i++){
        if(state.color.colorList[i] !== state.color.selectedColor){
            let checkEl = document.querySelector(`.select_color_${i}`);
            checkEl.checked = false;
        }
    }
}

