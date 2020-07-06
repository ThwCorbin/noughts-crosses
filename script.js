//* Variables ###############
let board = document.querySelector(".board");
let squares = document.querySelectorAll(".square");
let resetBtn = document.querySelector(".reset-btn");
let messageText = document.querySelector(".message-text");
let currentColor = "red";
let currentPlayer = "Noughts";

//* Functions ###############

let changePlayer = () => {
	currentColor = currentColor === "red" ? "blue" : "red";
	currentPlayer = currentPlayer === "Noughts" ? "Crosses" : "Noughts";
	messageText.style.color =
		currentColor === "red" ? "var(--red)" : "var(--blue)";
	messageText.textContent = currentPlayer;
};

let checkSquare = (e) => {
	if (e.target.className.includes("picked")) {
		messageText.textContent = `That square is taken, ${currentColor.toUpperCase()}!`;
		return;
	}
	if (e.target.classList[0] === "o-x-text") {
		e.target.classList.add("picked");
		e.target.parentElement.classList.add(`${currentColor}`, "picked");
		e.target.textContent = currentPlayer === "Noughts" ? "O" : "X";
		changePlayer();
		return;
	}
	if (e.target.classList[0] === "square") {
		e.target.classList.add(`${currentColor}`, "picked");
		e.target.firstElementChild.classList.add("picked");
		e.target.firstElementChild.textContent =
			currentPlayer === "Noughts" ? "O" : "X";
		changePlayer();
		return;
	}
};

let resetBoard = () => {
	squares.forEach((square) => {
		square.classList.remove("red", "blue", "picked");
		square.firstElementChild.classList.remove("picked");
		square.firstElementChild.textContent = "";
	});
	currentColor = "red";
	currentPlayer = "Noughts";
	messageText.style.color = "var(--red)";
	messageText.textContent = "Noughts goes first!";
};

//* Event listeners ###############
board.addEventListener("click", checkSquare);

resetBtn.addEventListener("click", resetBoard);
