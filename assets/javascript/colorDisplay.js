
let colorListEl = document.querySelector(".colorlist");

function displayColorList(colorList) {
    //get rid of old colorList first
    while (colorListEl.firstChild) {
        colorListEl.removeChild(colorListEl.lastChild);
    }
    for (let i = 0; i < colorList.length; i++) {
        //need to display the color, and a button for deleting the color for each color in the color list.
        let divEl = document.createElement("div");
        divEl.style.padding = "20px";
        let divEl2 = document.createElement("div");
        divEl2.className = `color_${i} w3-round-large`;
        divEl2.textContent = `#${colorList[i]} `;
        divEl2.style.backgroundColor = `#${colorList[i]}`
        divEl2.style.display = "inline";
        divEl2.style.padding = "16px";
        divEl.appendChild(divEl2);
        let buttonEl = document.createElement("button");
        buttonEl.className = `fa fa-trash w3-round-large`;
        buttonEl.id = `delete_color_${i}`;
        buttonEl.onclick = (event => handleDeleteColor(event));
        buttonEl.style.margin = "0px 16px";
        divEl2.appendChild(buttonEl);
        let checkEl = document.createElement("input");
        checkEl.type = "checkbox";
        checkEl.className = `select_color_${i}`
        checkEl.onclick = (event => handleColorSelect(event));
        divEl2.appendChild(checkEl); 
        colorListEl.appendChild(divEl);
    }
}