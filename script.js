//* Variables ###############
let board = document.querySelector(".board");
let resetBtn = document.querySelector(".reset-btn");
let messageText = document.querySelector(".message-text");
let currentColor = "red";
let currentPlayer = "blue";

//* Functions ###############

let changePlayer = () => {
	currentColor = currentColor === "red" ? "blue" : "red";
	currentPlayer = currentPlayer === "Noughts" ? "Crosses" : "Noughts";
	messageText.style.color = currentColor;
	messageText.textContent = currentPlayer;
};

let checkSquare = (e) => {
	if (e.target.className.includes("picked")) {
		messageText.textContent = `This square is taken, ${currentColor}!`;
		return;
	}
	if (e.target.classList[0] === "o-x-text") {
		console.log(e.target, "target is p");
		e.target.classList.add("picked");
		e.target.parentElement.classList.add(`${currentColor}`, "picked");
		changePlayer();
		return;
	}
	if (e.target.classList[0] === "square") {
		console.log(e.target, "target is div square");
		e.target.classList.add(`${currentColor}`, "picked");
		e.target.firstElementChild.classList.add("picked");
		changePlayer();
		return;
	}
};

//* Event listeners ###############
board.addEventListener("click", checkSquare);

resetBtn.addEventListener("click", (e) => {
	console.log(e.target);
});
