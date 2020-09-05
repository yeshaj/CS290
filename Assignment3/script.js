let buildTable = () => {
    // this will create a new table
    let table = document.createElement("table");

    // The dimensions of 4 x 4 table
    for (let i = 0; i < 4; i++) {
        let newRow = document.createElement("tr");
        table.appendChild(newRow);
    }

    let rowData = table.firstElementChild;

    let fillCell = (elementType, cellData) => {
        let newCell = document.createElement(elementType);
        newCell.textContent = cellData;
        rowData.appendChild(newCell);
    }

    // create the headers of the table
    for (let i = 1; i <= 4; i++) {
        fillCell("th", `Header ${i}`);
    }

    for (let i = 1; i <= 3; i++) {
        // Get the next row
        rowData = rowData.nextElementSibling;

        for (let j = 1; j <= 4; j++) {
            let cellPosition = `${i}, ${j}`;
            fillCell("td", cellPosition);
        }
    }

    document.body.appendChild(table);

    // Format table styling
    let tableStyle = "border: 1px solid black; "

    table.style.cssText = tableStyle;

    let tableHeaders = document.body.getElementsByTagName("th");
    let tableCells = document.body.getElementsByTagName("td");

    for (let i = 0; i < tableHeaders.length; i++) {
        tableHeaders[i].style.border = "1px solid black";
    }

    for (let i = 0; i < tableCells.length; i++) {
        tableCells[i].style.border = "1px solid black";
        tableCells[i].style.padding = "2px";
    }
}

let buildDirectionButtons = () => {

    let directions = ["Up", "Down", "Left", "Right"];

    let createButton = (direction) => {
        let button = document.createElement("button");
        let buttonText = document.createTextNode(direction);
        button.id = direction;
        button.appendChild(buttonText);
        document.body.appendChild(button);
        button.style.margin = "1.5px";
    }

    directions.forEach(direction => createButton(direction));

}

buildTable();
buildDirectionButtons();

let selectedCellLocation = 0;
let cells = document.getElementsByTagName("td");
let currentSelectedCell = cells[selectedCellLocation];
currentSelectedCell.id = "selected";
currentSelectedCell.style.borderWidth = "3px";

let resetStyle = () => {
    // reset the style from 3px back to 1px
    currentSelectedCell.style.borderWidth = "1px";
    // Remove the id from the current selected cell
    currentSelectedCell.removeAttribute("id");
}

let setSelected = () => {
    currentSelectedCell = cells[selectedCellLocation];
    currentSelectedCell.style.borderWidth = "3px";
    currentSelectedCell.id = "selected";
}

let moveUp = () => {
    if (selectedCellLocation - 4 < 0) return;

    resetStyle();
    selectedCellLocation -= 4;
    setSelected();
}

let moveRight = () => {
    if ((selectedCellLocation + 1) % 4 == 0) return;

    resetStyle();
    selectedCellLocation++;
    setSelected();
}

let moveDown = () => {
    if (selectedCellLocation + 4 >= cells.length) return;

    resetStyle();
    selectedCellLocation += 4;
    setSelected();
}

let moveLeft = () => {
    if (selectedCellLocation % 4 == 0) return;

    resetStyle();
    selectedCellLocation--;
    setSelected();
}

// this will create the button labeled "Mark"
let markButton = document.createElement("button");
document.body.appendChild(markButton);
markButton.id = "Mark-Button";
markButton.textContent = "Mark Current Cell";

let markCurrentCell = () => {
    currentSelectedCell.style.backgroundColor = "yellow";
}

// Add event listener to each button
document.getElementById("Up").addEventListener("click", moveUp);
document.getElementById("Down").addEventListener("click", moveDown);
document.getElementById("Right").addEventListener("click", moveRight);
document.getElementById("Left").addEventListener("click", moveLeft);
document.getElementById("Mark-Button").addEventListener("click", markCurrentCell);
