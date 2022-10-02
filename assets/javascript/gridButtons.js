let bodyEl = document.querySelector(".body");

function handleGridEvents(event) {
    if (event.target.id.includes("cell_")) {
        //the click is coming from the grid
        if (state.color.selectedColor !== "") {
            //color the cell with the selected color.
            state.grid.colorCell(event.target.id.replace("cell_", ""), state.color.selectedColor);
            displayGrid(state.grid);
        }
    }
}

function handleClearGrid() {
    state.grid.resetGrid();
    displayGrid(state.grid);
}

function handleDeleteGrid() {
    //state.grid
}
function handleExportDesign() {
    if (state.grid !== "") {
        //grid is initialized.
        let name = document.querySelector(".filename").value;
        console.log(name);
        let width = state.grid.rows;
        let height = state.grid.cols;
        let buffer = new Uint8ClampedArray(width * height * 4);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let pos = (y * width + x) * 4; // position in buffer based on x and y
                //put the values from my color array here!
                let r = 255;
                let g = 255;
                let b = 255;
                if (state.grid.cells[x + y * width].color !== "") {
                    r = parseInt((state.grid.cells[x + y * width].color.substring(0, 2)), 16);
                    g = parseInt((state.grid.cells[x + y * width].color.substring(2, 4)), 16);
                    b = parseInt((state.grid.cells[x + y * width].color.substring(4, 6)), 16);
                }
                console.log(r, g, b);
                buffer[pos] = r;           // some R value [0, 255]
                buffer[pos + 1] = g;           // some G value
                buffer[pos + 2] = b;           // some B value
                buffer[pos + 3] = 255;           // set alpha channel
            }
        }


        // create off-screen canvas element
        let canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        // create imageData object
        let idata = ctx.createImageData(width, height);

        // set our buffer as source
        idata.data.set(buffer);

        // update canvas with new data
        ctx.putImageData(idata, 0, 0);

        let dataUri = canvas.toDataURL();
        //console.log(dataUri);
        createDownloadlink(dataUri, name)
    }
}

function createDownloadlink(link, name){
    let dlEl = document.querySelector(".downloadLinkContainer");
    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.download = name;
    linkEl.textContent="Download Design";
    dlEl.appendChild(linkEl);
}
function closeDownloadModal(){
    deleteDownloadLink();
    document.getElementById('id02').style.display='none';
}
function deleteDownloadLink(){
    let dlEl = document.querySelector(".downloadLinkContainer");
    let fileNameEl = document.getElementById("filename");
    fileNameEl.value="";
    while (dlEl.firstChild) {
        dlEl.removeChild(dlEl.lastChild);
    }
}

bodyEl.addEventListener("click", handleGridEvents);