
function handleAddColor(){
    let color = document.querySelector(".selectedColor").value;
    state.color.addColorToList((color).toString().replace("#",""));
    displayColorList(state.color.colorList);
    document.getElementById('id01').style.display='none';
}
