function createGrid(){
    let rows = document.getElementById("squares").value;
    let grid = document.getElementById("grid");
    grid.innerHTML = "";
    for (let i = 0; i < rows; i++){
        let row = document.createElement("div");

        row.className = "row";
        row.style.width = "960px";
        row.style.height = 960/rows + "px";
        row.style.display = "flex";
        for (var j = 0; j < rows; j++){
            var cell = document.createElement("div");
            cell.style.width = 960/rows + "px";
            cell.style.height = 960/rows + "px";
            cell.style.border = "1px solid black";
            cell.className = "cell";
            cell.addEventListener("mouseover", function(){
                this.style.backgroundColor = "gray";
            });
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }

}
function clearGrid(){
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "white";
    }
}
   