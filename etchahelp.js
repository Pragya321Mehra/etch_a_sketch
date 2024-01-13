function createGrid(){
    let rows = document.getElementById("squares").value;
    let grid = document.getElementById("grid");

    grid.innerHTML = "";
    let flag=0;
            grid.addEventListener("mousedown",function(){
             flag=1;
            },false);
            grid.addEventListener("mouseup",function(){
             flag=0;
            },false);

    for (let i = 0; i < rows; i++){
        let row = document.createElement("div");

        row.className = "row";
         row.style.width = "60vw";
         row.style.height = 70/rows + "vh";
        row.style.display = "flex";
        for (var j = 0; j < rows; j++){
            var cell = document.createElement("div");
            cell.style.width = 60/rows + "vw";
            cell.style.height = 70/rows + "vh";
            //cell.style.border = "1px solid black";
            
             
            cell.className = "cell";
           
            cell.addEventListener("mouseover", function(){
                  if(flag==1)
                    {    let colour=document.getElementById("colour").value;
                        this.style.backgroundColor = colour;
            }
    
            },false);
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