
let colorListEl = document.querySelector(".colorlist");

function displayColorList(colorList) {
    //get rid of old colorList first
    while (colorListEl.firstChild) {
        colorListEl.removeChild(colorListEl.lastChild);
    }
    for (let i = 0; i < colorList.length; i++) {
        //need to display the color, and a button for deleting the color for each color in the color list.
        let pEl = document.createElement("p");
        let spanEl = document.createElement("span");
        spanEl.className = `w3-badge color_${i}`;
        spanEl.textContent = `#${colorList[i]}`;
        spanEl.style.backgroundColor = `#${colorList[i]}`
        pEl.appendChild(spanEl);
        let buttonEl = document.createElement("button");
        buttonEl.className = `delete_color_${i} fa fa-trash`;
        pEl.appendChild(buttonEl);
        colorListEl.appendChild(pEl);
    }
}