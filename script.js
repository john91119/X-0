const cells = document.querySelectorAll(".cell");
let number = 1;
const grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function startGame (){
    for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                grid[i][j] = "";
                document.getElementById(`cell-${i}-${j}`).textContent = "";
            }
        }
    number = 1;
    winner.textContent = "";
    winner.style.display = "none";

}

const startButton = document.querySelector(".startBttn");
startButton.addEventListener("click", startGame);

function showMessage(message) {
    const messageElement = document.getElementById("winner");
    messageElement.innerText = "Castigatorul este " + message;
    messageElement.classList.add("show");
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const [row, col] = cell.id.split("-").slice(1).map(Number);
        if (grid[row][col] == "" && number % 2 !== 0) {
            grid[row][col] = "X";
            cell.textContent = "X";
            ++number;
            for (let row = 0; row < grid.length; row++) {
                if (grid[row][0] === "X" && grid[row][1] === "X" && grid[row][2] === "X") {
                    showMessage("X");
                }
            }

            for (let col = 0; col < grid[0].length; col++) {
                if (grid[0][col] === "X" && grid[1][col] === "X" && grid[2][col] === "X") {
                    showMessage("X");
                }
            }

            if ((grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") ||
                (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X")) {
                   showMessage("X");
            }

        } else if (grid[row][col] === "" && number % 2 === 0) {
            grid[row][col] = "0";
            cell.textContent = "0";
            ++number;
            symbol = "0";
            for (let row = 0; row < grid.length; row++) {
                if (grid[row][0] === "0" && grid[row][1] === "0" && grid[row][2] === "0") {
                    showMessage("0");
                }
            }

            for (let col = 0; col < grid[0].length; col++) {
                if (grid[0][col] === "0" && grid[1][col] === "0" && grid[2][col] === "0") {
                    showMessage("0");
                }
            }

            if ((grid[0][0] === "0" && grid[1][1] === "0" && grid[2][2] === "0") ||
                (grid[0][2] === "0" && grid[1][1] === "0" && grid[2][0] === "0")) {
                    showMessage("0");
            }
        }
    });
});