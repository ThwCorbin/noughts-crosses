//* Variables ###############
let board = document.querySelector(".board");
let squares = document.querySelectorAll(".square");
let resetBtn = document.querySelector(".reset-btn");
let messageText = document.querySelector(".message-text");
let currentColor = "red";
let currentPlayer = "Noughts";
let gameActive = false;
let squareArr = [];

class Square {
	constructor(classSq) {
		this.classSq = classSq;
		this.marked = false;
		this.owner = null;
	}
}

//* Functions ###############
let endGame = () => {
	console.log(`${currentPlayer} wins!`);
	messageText.textContent = `!!! ${currentPlayer} wins !!!`;
	gameActive = false;
};

let changePlayer = () => {
	currentColor = currentColor === "red" ? "blue" : "red";
	currentPlayer = currentPlayer === "Noughts" ? "Crosses" : "Noughts";
	messageText.style.color =
		currentColor === "red" ? "var(--red)" : "var(--blue)";
	messageText.textContent = currentPlayer;
};

let checkWinner = (classSqValue) => {
	//* Update squareArr current square object using index
	let idx = Number(classSqValue.slice(3)) - 1;
	squareArr[idx].marked = true;
	squareArr[idx].owner = currentPlayer;

	//* Check if either player has three squares in a row, column, or diagonally
	squareArr[0].marked &&
	squareArr[0].owner === squareArr[1].owner &&
	squareArr[0].owner === squareArr[2].owner
		? endGame()
		: squareArr[3].marked &&
		  squareArr[3].owner === squareArr[4].owner &&
		  squareArr[3].owner === squareArr[5].owner
		? endGame()
		: squareArr[6].marked &&
		  squareArr[6].owner === squareArr[7].owner &&
		  squareArr[6].owner === squareArr[8].owner
		? endGame()
		: squareArr[0].marked &&
		  squareArr[0].owner === squareArr[3].owner &&
		  squareArr[0].owner === squareArr[6].owner
		? endGame()
		: squareArr[1].marked &&
		  squareArr[1].owner === squareArr[4].owner &&
		  squareArr[1].owner === squareArr[7].owner
		? endGame()
		: squareArr[2].marked &&
		  squareArr[2].owner === squareArr[5].owner &&
		  squareArr[2].owner === squareArr[8].owner
		? endGame()
		: squareArr[0].marked &&
		  squareArr[0].owner === squareArr[4].owner &&
		  squareArr[0].owner === squareArr[8].owner
		? endGame()
		: squareArr[2].marked &&
		  squareArr[2].owner === squareArr[4].owner &&
		  squareArr[2].owner === squareArr[6].owner
		? endGame()
		: changePlayer();
};

let checkSquare = (e) => {
	if (gameActive === false) return;

	if (e.target.className.includes("picked")) {
		messageText.textContent = `That square is taken, ${currentColor.toUpperCase()}!`;
		return;
	}

	if (e.target.classList[0] === "o-x-text") {
		e.target.classList.add("picked");
		e.target.parentElement.classList.add(`${currentColor}`, "picked");
		e.target.textContent = currentPlayer === "Noughts" ? "O" : "X";
		checkWinner(e.target.parentElement.classList[1]);
		return;
	}

	if (e.target.classList[0] === "square") {
		e.target.classList.add(`${currentColor}`, "picked");
		e.target.firstElementChild.classList.add("picked");
		e.target.firstElementChild.textContent =
			currentPlayer === "Noughts" ? "O" : "X";
		checkWinner(e.target.classList[1]);
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
	squareArr.length = 0;
	makeInstances();
};

//* Event listeners ###############
board.addEventListener("click", checkSquare);

resetBtn.addEventListener("click", resetBoard);

//* Run on page load
let makeInstances = () => {
	gameActive = true;
	squares.forEach((square) => {
		let newObj = new Square(square.classList[1]);
		squareArr.push(newObj);
	});
};

makeInstances();
