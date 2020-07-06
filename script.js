//* Variables ###############
let board = document.querySelector(".board");
let resetBtn = document.querySelector(".reset-btn");

//* Event listeners ###############
board.addEventListener("click", (e) => {
	console.log(e.target);
});

resetBtn.addEventListener("click", (e) => {
	console.log(e.target);
});
